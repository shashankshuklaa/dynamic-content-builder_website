import { useContext, useState } from "react";
import { BuilderContext } from "../../context/BuilderContext";

export default function ImageBlock({ block }) {
  const { dispatch } = useContext(BuilderContext);
  const [error, setError] = useState(false);

  return (
    <div>
      <input
        className="w-full border p-2 mb-2"
        value={block.content}
        onChange={(e) => {
          setError(false);
          dispatch({
            type: "UPDATE_BLOCK",
            payload: { ...block, content: e.target.value },
          });
        }}
      />
      {!error && block.content && (
        <img src={block.content} onError={() => setError(true)} />
      )}
      {error && <p className="text-red-500">Invalid URL</p>}
    </div>
  );
}
