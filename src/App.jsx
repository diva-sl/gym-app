import "remixicon/fonts/remixicon.css";
import "aos/dist/aos.css";
import Exercise from "./components/fit/Exercise";
import Hero from "./components/fit/Hero";
import Testimonials from "./components/fit/Testimonials";
import Aos from "aos";
import {
  Navbar,
  Home,
  About,
  Teacher,
  Contact,
  Courses,
  Footer,
} from "./components/index";
import "./index.css";
import { useEffect } from "react";
import Start from "./components/fit/Start";
import Pricing from "./components/fit/Pricing";
import Benifits from "./components/fit/Benifits";
function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="font-Poppins bg-black w-full overflow-hidden">
      <Navbar />
      <div className="p-2">
        <Hero />
        <Benifits />
        <About />
        <Exercise />
        <Start />
        <Pricing />
        <div className="flex justify-center flex-col items-center">
          <Testimonials />
        </div>
        <Courses />
        <Teacher />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
