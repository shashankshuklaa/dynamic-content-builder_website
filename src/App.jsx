import Palette from "./components/Palette";
import Canvas from "./components/Canvas";

export default function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Palette />
      <Canvas />
    </div>
  );
}
