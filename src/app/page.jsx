import Header from "../app/componenents/header";
import LinkStream from "../app/componenents/linkStream";
import Tracklist from "../app/componenents/tracklist";
import MusicLauncher from "../app/componenents/musicLauncher";
import Footer from "./componenents/footer";
import NavFooterEmail from "./componenents/NavFooterEmail";

export default function Home() {
  return (
    <div className="relative h-screen bg-cover bg-fond">

      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-500 to-gray-500 mix-blend-multiply"></div>
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <Header />
      </div>

      <div className="md:mx-40">
        <LinkStream />
        <Tracklist />
        <MusicLauncher />
        <div className="border-t border-white mx-4 mt-28 mb-8"></div>
        <NavFooterEmail />
        <div className="border-t border-white mx-4 mb-8"></div>
        <Footer />
      </div>
      
    </div>
  );
}