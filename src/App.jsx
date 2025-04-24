import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <div className="bg-white-smoke dark:bg-nero transition-all">
      <main className="container mx-auto px-6">
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;
