import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { useEffect, useState } from "react";
// import "aos/dist/aos.css";
// import Aos from "aos";

function NavbarComponent() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        // console.log("testing");
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  });

  // useEffect(() => {
  //   Aos.init();
  // }, [])

  let scrollActive = scroll ? "py-3 bg-white shadow" : "py-2";

  return (
    <Navbar
      className={`fixed w-full transition-all z-20 text-center ${scrollActive}`}
    >
      <NavbarBrand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Ridwan Asandi
        </span>
      </NavbarBrand>
      <div className="flex justify-center items-center">
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="/">Home</NavbarLink>
        <NavbarLink href="#about">About</NavbarLink>
        <NavbarLink href="#skill">Skill</NavbarLink>
        <NavbarLink href="#project">Project</NavbarLink>
        <NavbarLink href="#contact">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

export default NavbarComponent;
