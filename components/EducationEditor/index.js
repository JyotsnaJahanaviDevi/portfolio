import React, { useState } from "react";
import Button from "../Button";
import TextareaAutosize from "react-textarea-autosize";
import { useTheme } from "next-themes";

const EducationEditor = ({ post, close, refresh }) => {
  const { theme } = useTheme();
  const [currentTabs, setCurrentTabs] = useState("EDUCATIONDETAILS");
  const [educationContent, setEducationContent] = useState(post.content || "");
  const [educationVariables, setEducationVariables] = useState({
    date: post.date || "",
    title: post.title || "",
    tagline: post.tagline || "",
    preview: post.preview || "",
    image: post.image || "",
  });

  const savePost = async () => {
    if (process.env.NODE_ENV === "development") {
      const response = await fetch("/api/education/edit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: post.slug,
          content: educationContent,
          variables: educationVariables,
        }),
      });
      if (response.ok) {
        close();
        refresh(); // reload page or re-fetch data
      } else {
        alert("Failed to save the post.");
      }
    } else {
      alert("Editing only works in development mode.");
    }
  };

  return (
    <div
      className={`fixed z-10 w-screen h-screen overflow-auto top-0 flex flex-col items-center ${
        theme === "dark" ? "bg-black" : "bg-white"
      }`}
    >
      <div className="container my-20">
        <div className="mt-10">
          <div className="flex items-center justify-between sticky top-12 z-10">
            <h1 className="text-4xl">{educationVariables.title}</h1>
            <div className="flex items-center gap-2">
              <Button onClick={savePost} type="primary">Save</Button>
              <Button onClick={close}>Close</Button>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-5">
            <Button
              onClick={() => setCurrentTabs("EDUCATIONDETAILS")}
              type={currentTabs === "EDUCATIONDETAILS" ? "primary" : undefined}
            >
              Education Details
            </Button>
            <Button
              onClick={() => setCurrentTabs("CONTENT")}
              type={currentTabs === "CONTENT" ? "primary" : undefined}
            >
              Content
            </Button>
          </div>

          {currentTabs === "EDUCATIONDETAILS" && (
            <div className="mt-10 flex flex-col gap-5">
              <div className="flex flex-col items-center w-full">
                <label className="w-full text-sx opacity-50">Date</label>
                <input
                  type="text"
                  placeholder="e.g., 2018 - 2022 or Summer 2021"
                  value={educationVariables.date}
                  onChange={(e) =>
                    setEducationVariables({ ...educationVariables, date: e.target.value })
                  }
                  className="w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2"
                />
              </div>

              <div className="flex flex-col items-center w-full">
                <label className="w-full text-sx opacity-50">Title</label>
                <input
                  value={educationVariables.title}
                  onChange={(e) =>
                    setEducationVariables({ ...educationVariables, title: e.target.value })
                  }
                  className="w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2"
                />
              </div>

              <div className="flex flex-col items-center w-full">
                <label className="w-full text-sx opacity-50">Tagline</label>
                <input
                  value={educationVariables.tagline}
                  onChange={(e) =>
                    setEducationVariables({ ...educationVariables, tagline: e.target.value })
                  }
                  className="w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2"
                />
              </div>

              <div className="flex flex-col items-center w-full">
                <label className="w-full text-sx opacity-50">Preview (SEO)</label>
                <textarea
                  value={educationVariables.preview}
                  onChange={(e) =>
                    setEducationVariables({ ...educationVariables, preview: e.target.value })
                  }
                  className="w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2"
                />
              </div>

              <div className="flex flex-col items-center w-full">
                <label className="w-full text-sx opacity-50">Image URL</label>
                <input
                  value={educationVariables.image}
                  onChange={(e) =>
                    setEducationVariables({ ...educationVariables, image: e.target.value })
                  }
                  className="w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2"
                />
              </div>
            </div>
          )}

          {currentTabs === "CONTENT" && (
            <div className="mt-10 flex flex-col items-center w-full">
              <label className="w-full text-sx opacity-50">Content</label>
              <TextareaAutosize
                className="w-full h-auto mt-5 p-4 border hover:border-blue-400 rounded-xl shadow-xl"
                value={educationContent}
                onChange={(e) => setEducationContent(e.target.value)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EducationEditor;
