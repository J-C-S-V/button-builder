import { WorkBench } from "./components/WorkBench";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <main className="app">
      <h1 className="app__title">
        <span className="app__title-span-1">Free</span>&nbsp;
        <span className="app__title-span-2">Button</span>&nbsp;
        <span className="app__title-span-3">Builder</span>
      </h1>
      <WorkBench />
      <Footer />
    </main>
  );
}

export default App;
