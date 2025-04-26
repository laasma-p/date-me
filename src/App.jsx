import Hero from "./components/Hero";
import About from "./components/About";
import Interests from "./components/Interests";
import Favorites from "./components/Favorites";
import ShortTermGoals from "./components/ShortTermGoals";
import IdealPartner from "./components/IdealPartner";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white-smoke dark:bg-nero transition-all">
      <main className="container mx-auto px-6">
        <Hero />
        <About />
        <Interests />
        <Favorites />
        <ShortTermGoals />
        <IdealPartner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
