import "./App.css";
import Hero from "../../frontendv2/components/hero/hero";

import Navbar from "../../frontendv2/components/hero/navbar/navbar";
import Footer from "../../frontendv2/components/hero/footer/footer";
import Navigation from "../../frontendv2/components/hero/navigation/navigation";

function App() {
  return (
    <div className="text-white min-h-screen font-serif">
      {/*navbar   */}
      <Navbar />
      {/* nevigation */}
      <Navigation />
      {/* hero */}
      <Hero />
      {/* our menu  */}
      {/* chef */}
      {/* features */}
      {/* RecentPost */}
      {/* reservation */}
      {/* category */}
      {/* TestMonial */}
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
