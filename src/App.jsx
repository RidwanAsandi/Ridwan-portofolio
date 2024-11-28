import NavbarComponent from "./Component/NavbarComponent";
import HeroComponent from "./Component/HeroComponent";
import AboutComponent from "./Component/AboutComponent";
import SkillComponent from "./Component/SkillComponent";
import ProjectComponent from "./Component/ProjectComponent";
import ContactComponent from "./Component/ContactComponent";
import FooterComponent from "./Component/FooterComponent";

function App() {
  return (
    <div>
      <NavbarComponent />
      <HeroComponent />
      <AboutComponent/>
      <SkillComponent/>
      <ProjectComponent/>
      <ContactComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
