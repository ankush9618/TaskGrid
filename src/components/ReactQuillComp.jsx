"use client"; // MUST be first line

import React, { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import ReactQuill to avoid SSR
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";

function ReactQuillComp() {
  const [value, setValue] = useState("");

  return (
    <div style={{ padding: "20px"}} className="Quill-div">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        placeholder="Start typing and format your text..."
      />
    </div>
  );
}

export default ReactQuillComp;
