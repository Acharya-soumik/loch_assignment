import Signup from "@/components/signup/Signup";
import "./App.css";
import Hero from "@/components/hero/Hero";

const App = () => {
  return (
    <div>
      <div className="flex flex-row-reverse sm:flex-row overflow-y-auto">
        <Hero />
        <Signup />
      </div>
    </div>
  );
};

export default App;
