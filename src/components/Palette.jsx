import { useContext } from "react";
import { BuilderContext } from "../context/BuilderContext";
import { BLOCK_TYPES } from "../utils/constants";

export default function Palette() {
  const { addBlock } = useContext(BuilderContext);

  const items = [
    { label: "Text", type: BLOCK_TYPES.TEXT },
    { label: "Image", type: BLOCK_TYPES.IMAGE },
    { label: "Header", type: BLOCK_TYPES.HEADER },
    { label: "Markdown", type: BLOCK_TYPES.MARKDOWN },
  ];

  return (
    <div className="w-72 bg-white/80 backdrop-blur border-r p-5">
      <h2 className="text-lg font-semibold mb-6">Blocks</h2>
      <div className="space-y-3">
        {items.map((item) => (
          <button
            key={item.type}
            onClick={() => addBlock(item.type)}
            className="w-full p-3 border rounded-lg hover:bg-gray-50 hover:shadow active:scale-95"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}