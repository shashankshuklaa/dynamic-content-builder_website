import { useContext } from "react";
import { BuilderContext } from "../../context/BuilderContext";
import { marked } from "marked";

export default function MarkdownBlock({ block }) {
  const { dispatch } = useContext(BuilderContext);

  return (
    <div className="grid grid-cols-2 gap-2">
      <textarea
        className="border p-2"
        value={block.content}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_BLOCK",
            payload: { ...block, content: e.target.value },
          })
        }
      />
      <div
        className="border p-2"
        dangerouslySetInnerHTML={{
          __html: marked.parse(block.content || ""),
        }}
      />
    </div>
  );
}
