import React from "react";
import Header from "../components/Header";
import Cursor from "../components/Cursor";
import data from "../data/portfolio.json";

const Resume = () => {
  return (
    <>
      {data.showCursor && <Cursor />}
      <div className="container mx-auto flex flex-col items-center justify-center mt-10">
        <Header isEducation />

        <h1 className="text-3xl font-bold mb-6">My Resume</h1>

        {/* PDF Embed */}
        <embed
          src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
          type="application/pdf"
          className="w-full h-[90vh] border-none"
        />

        {/* Download Button */}
        <a
          href="/resume.pdf"
          download="Jyotsna_Resume.pdf"
          className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold"
        >
          Download Resume
        </a>
      </div>
    </>
  );
};

export default Resume;
