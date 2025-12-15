import Hero from "../components/hero/hero";

import Navbar from "../components/hero/navbar/navbar";
import Footer from "../components/hero/footer/footer";
import Navigation from "../components/hero/navigation/navigation";
import Menu from "@/components/menu/menu";
import Reservation from "@/components/reservation/reservation";

function Home() {
  return (
    <div className="text-white min-h-screen max-w-screen font-serif">
      {/*navbar   */}
      <Navbar />
      {/* nevigation */}
      <Navigation />
      {/* hero */}
      <Hero />
      {/* our menu  */}
      <Menu />

      {/* chef */}
      {/* features */}
      {/* RecentPost */}

      {/* reservation */}
      <Reservation />
      {/* category */}
      {/* TestMonial */}
      {/* footer */}
      <Footer />
    </div>
  );
}

export default Home;
