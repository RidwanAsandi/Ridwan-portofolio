import ImgWa from "../assets/img-social/whatsapp.png";
import ImgInstagram from "../assets/img-social/instagram.png";
import ImgGithub from "../assets/img-social/github.png";
import ImgLinkedin from "../assets/img-social/linkedin.png";

const FooterComponent = () => {
  return (
    <div className="footer bg-white shadow flex justify-between items-center px-2">
      <div className="container mx-auto">
        <p className="py-2">
          &copy; Copyright by <span className="font-bold">Ridwan Asandi</span>
        </p>
      </div>
      <div className="sosial flex justify-between gap-3">
        <a href="https://web.whatsapp.com/">
          <img src={ImgWa} width={30} alt="Whatsapp" />
        </a>
        <a href="https://www.instagram.com/ridwanasnd/">
          <img src={ImgInstagram} width={30} alt="Instagram" />
        </a>
        <a href="https://github.com/RidwanAsandi">
          <img src={ImgGithub} width={30} alt="Github" />
        </a>
        <a href="https://www.linkedin.com/in/ridwan-asandi/">
          <img src={ImgLinkedin} width={30} alt="Linkedin" />
        </a>
      </div>
    </div>
  );
};

export default FooterComponent;
