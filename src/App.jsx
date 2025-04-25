import Hero from "./components/Hero";
import About from "./components/About";
import Interests from "./components/Interests";

function App() {
  return (
    <div className="bg-white-smoke dark:bg-nero transition-all">
      <main className="container mx-auto px-6">
        <Hero />
        <About />
        <Interests />
      </main>
    </div>
  );
}

export default App;
