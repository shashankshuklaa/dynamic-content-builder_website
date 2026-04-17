import { useContext } from "react";
import { BuilderContext } from "../../context/BuilderContext";

export default function HeaderBlock({ block }) {
  const { dispatch } = useContext(BuilderContext);
  const Tag = block.config.level || "h1";

  return (
    <div>
      <select
        value={Tag}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_BLOCK",
            payload: {
              ...block,
              config: { level: e.target.value },
            },
          })
        }
      >
        <option value="h1">H1</option>
        <option value="h2">H2</option>
        <option value="h3">H3</option>
      </select>

      <input
        value={block.content}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_BLOCK",
            payload: { ...block, content: e.target.value },
          })
        }
      />

      <Tag>{block.content}</Tag>
    </div>
  );
}
