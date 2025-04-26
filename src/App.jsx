import Hero from "./components/Hero";
import About from "./components/About";
import Interests from "./components/Interests";
import Favorites from "./components/Favorites";
import ShortTermGoals from "./components/ShortTermGoals";

function App() {
  return (
    <div className="bg-white-smoke dark:bg-nero transition-all">
      <main className="container mx-auto px-6">
        <Hero />
        <About />
        <Interests />
        <Favorites />
        <ShortTermGoals />
      </main>
    </div>
  );
}

export default App;
