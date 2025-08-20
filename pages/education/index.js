import Head from "next/head";
import Router from "next/router";
import { useEffect, useRef, useState } from "react";
import { stagger } from "../../animations";
import Button from "../../components/Button";
import Cursor from "../../components/Cursor";
import Header from "../../components/Header";
import data from "../../data/portfolio.json";
import { useIsomorphicLayoutEffect } from "../../utils";
import { getAllPosts } from "../../utils/api";

const Education = ({ posts }) => {
  const showEducation = useRef(data.showEducation);
  const text = useRef();
  const router = Router;
  const [mounted, setMounted] = useState(false);

  useIsomorphicLayoutEffect(() => {
    stagger([text.current], { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" }, { y: 0, x: 0, transform: "scale(1)" });
    if (!showEducation.current) router.push("/");
  }, []);

  useEffect(() => setMounted(true), []);

  const createEducation = () => {
    if (process.env.NODE_ENV === "development") {
      fetch("/api/education", { method: "POST", headers: { "Content-Type": "application/json" } })
        .then(() => router.reload(window.location.pathname));
    } else alert("Development mode only.");
  };

  const deleteEducation = (slug) => {
    if (process.env.NODE_ENV === "development") {
      fetch("/api/education", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ slug }) })
        .then(() => router.reload(window.location.pathname));
    } else alert("Development mode only.");
  };

  return (
    showEducation.current && (
      <>
        {data.showCursor && <Cursor />}
        <Head><title>Education</title></Head>
        <div className={`container mx-auto mb-10 ${data.showCursor && "cursor-none"}`}>
          <Header isEducation={true} />
          <h1 ref={text} className="mx-auto mob:p-2 text-bold text-6xl laptop:text-8xl w-full">Education.</h1>
          <div className="mt-10 grid grid-cols-1 mob:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-10">
            {posts.map(post => (
              <div
                key={post.slug}
                className="cursor-pointer relative"
                onClick={() => Router.push(`/education/${post.slug}`)}
              >
                <img className="w-full h-60 rounded-lg shadow-lg object-cover" src={post.image} alt={post.title} />
                <h2 className="mt-5 text-4xl">{post.title}</h2>
                <h3 className="mt-1 text-lg opacity-60">{post.tagline}</h3>
                <p className="mt-2 opacity-50 text-lg">{post.preview}</p>
                <span className="text-sm mt-5 opacity-25">{post.date}</span>
                {process.env.NODE_ENV === "development" && mounted && (
                  <div className="absolute top-0 right-0">
                    {/* <Button onClick={(e) => { e.stopPropagation(); deleteEducation(post.slug); }} type="primary">
                      Delete
                    </Button> */}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {process.env.NODE_ENV === "development" && mounted && (
          <div className="fixed bottom-6 right-6">
            {/* <Button onClick={createEducation} type="primary">Add New Post +</Button> */}
          </div>
        )}
      </>
    )
  );
};

export async function getStaticProps() {
  const posts = getAllPosts(["slug", "title", "image", "preview", "tagline", "date"]);
  return { props: { posts } };
}

export default Education;
