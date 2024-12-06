import { Modal } from "flowbite-react";
import { useState, useEffect } from "react";
import ImgRidwan from "../assets/CV-RidwanAsandi.png";
import "aos/dist/aos.css";
import Aos from "aos";

const HeroComponent = () => {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <section className="bg-gray-900 min-h-screen rounded-b-lg">
      <div className="px-4 mx-auto py-64 lg:py-56 sm:text-center md:text-center">
        <p className="text-white text-lg" data-aos="fade-down">Hello, Saya👋</p>
        <h1 className="mb-2 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl" data-aos="fade-down">
          Ridwan Asandi
        </h1>
        <p className="text-white text-lg" data-aos="fade-down">Web Developer</p>
        <div className="pt-2">
          <button
            onClick={() => setOpenModal(true)}
            className="bg-slate-700 px-3 py-2 rounded-xl text-white hover:bg-slate-800" data-aos="fade-up"
          >
            Resume Saya
          </button>

          <Modal size="md" show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Body className="mx-auto">
              <div className="space-y-2">
                <img width={320} src={ImgRidwan} alt="" />
              </div>
              <div className="flex justify-end gap-2">
                <a href="https://drive.google.com/file/d/1zhmPW_HjQG49ufyQZ35nM5A-KsA4vDju/view?usp=sharing">
                  <button
                    className="border rounded-lg bg-slate-600 hover:bg-slate-700 px-2 py-2 text-white font-semibold text-sm shadow-md"
                    onClick={() => setOpenModal(false)}
                  >
                    Unduh CV
                  </button>
                </a>
                <button
                  className="rounded-lg border hover:bg-slate-100 px-2 py-2 text-black font-semibold text-sm shadow-md"
                  onClick={() => setOpenModal(false)}
                >
                  Close
                </button>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
