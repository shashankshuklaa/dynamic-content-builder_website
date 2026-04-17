import {
  DndContext,
  closestCenter,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useContext } from "react";
import { BuilderContext } from "../context/BuilderContext";
import BlockWrapper from "./BlockWrapper";
import { arrayMove } from "../utils/helpers";

function SortableItem({ id, block }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id });

  return (
    <div
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      {...attributes}
      {...listeners}
      className={isDragging ? "opacity-50 scale-105" : ""}
    >
      <BlockWrapper block={block} />
    </div>
  );
}

export default function Canvas() {
  const { state, dispatch } = useContext(BuilderContext);

  const handleDragEnd = ({ active, over }) => {
    if (!over || active.id === over.id) return;

    const oldIndex = state.blocks.findIndex((b) => b.id === active.id);
    const newIndex = state.blocks.findIndex((b) => b.id === over.id);

    dispatch({
      type: "REORDER_BLOCKS",
      payload: arrayMove(state.blocks, oldIndex, newIndex),
    });
  };

  return (
    <div className="flex-1 p-8 overflow-auto">
      <div className="max-w-3xl mx-auto">
        {state.blocks.length === 0 && (
          <div className="text-center text-gray-400 mt-20 border-dashed border p-10 rounded-xl">
            Start building content
          </div>
        )}

        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext
            items={state.blocks.map((b) => b.id)}
            strategy={verticalListSortingStrategy}
          >
            {state.blocks.map((block) => (
              <SortableItem key={block.id} id={block.id} block={block} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}