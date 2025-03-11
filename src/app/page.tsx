import Blog from "./components/Home/Blog";
import Contact from "./components/Home/Contact";
import Portfolio from "./components/Home/Portfolio";
import Pricing from "./components/Home/Pricing";
import ProfilePage from "./components/Home/ProfilePage";
import Resume from "./components/Home/Resume";
import Skills from "./components/Home/Skills";
import WorkHistory from "./components/Home/WorkHistory";
import Header from "./components/Shared/Header";

export default function Home() {
  return (
    <div className="bg-[#171B1A]">
      <Header />
      <ProfilePage />
      <Resume />
      <WorkHistory />
      <Skills />
      <Portfolio />
      <Blog />
      <Pricing />
      <Contact />
    </div>
  );
}
