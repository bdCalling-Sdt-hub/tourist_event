"use client";
import React, { useRef, useState, useMemo, useEffect } from "react";
import JoditEditor from "jodit-react";
interface Props {
  text: string;
  setText: (value: string) => void;
}
const Jodit = ({ text, setText }: Props) => {
  const editor = useRef(null);
  const [content, setContent] = useState<string>("");

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: "Start typing...",
      toolbar: true,
      buttons: [
        "fontsize",
        "|",
        "bold",
        "italic",
        "underline",
        "|",
        "alignleft",
        "aligncenter",
        "alignright",
        "|",
        "undo",
        "redo",
      ],
      toolbarSticky: false,
      height: 200, // Adjust height to a compact size
    }),
    [],
  );
  useEffect(() => {
    if (text) {
      setContent(text);
    }
  }, [text]);
  return (
    <div className="jodit-container">
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        //@ts-ignore
        tabIndex={1}
        onBlur={(newContent) => {
          setContent(newContent);
          setText(newContent);
        }}
        onChange={() => {}}
      />
    </div>
  );
};

export default Jodit;

// Custom CSS to match the image style
