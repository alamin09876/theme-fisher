import Blog from "./components/Home/Blog";
import Portfolio from "./components/Home/Portfolio";
import ProfilePage from "./components/Home/ProfilePage";
import Resume from "./components/Home/Resume";
import Header from "./components/Shared/Header";

export default function Home() {
  return (
    <div className="bg-[#171B1A]">
      <Header />
      <ProfilePage />
      <Resume />
      <Portfolio />
      <Blog />
    </div>
  );
}
