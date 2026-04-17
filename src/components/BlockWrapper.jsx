import TextBlock from "./blocks/TextBlock";
import ImageBlock from "./blocks/ImageBlock";
import HeaderBlock from "./blocks/HeaderBlock";
import MarkdownBlock from "./blocks/MarkdownBlock";

export default function BlockWrapper({ block }) {
  const map = {
    text: TextBlock,
    image: ImageBlock,
    header: HeaderBlock,
    markdown: MarkdownBlock,
  };

  const Component = map[block.type];

  return (
    <div className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md mb-4">
      <Component block={block} />
    </div>
  );
}
