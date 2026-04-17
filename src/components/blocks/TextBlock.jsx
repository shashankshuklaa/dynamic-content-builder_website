import { useContext } from "react";
import { BuilderContext } from "../../context/BuilderContext";

export default function TextBlock({ block }) {
  const { dispatch } = useContext(BuilderContext);

  return (
    <textarea
      className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
      value={block.content}
      onChange={(e) =>
        dispatch({
          type: "UPDATE_BLOCK",
          payload: { ...block, content: e.target.value },
        })
      }
    />
  );
}