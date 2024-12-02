// import { Button } from "flowbite-react";

const HeroComponent = () => {
  return (
    <section className="bg-gray-900 rounded-b-lg">
      <div className="px-4 mx-auto max-w-screen-xl py-44 lg:py-56 sm:text-center">
        <p className="text-white text-lg">Hello, Saya👋</p>
        <h1 className="mb-2 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Ridwan Asandi
        </h1>
        <p className="text-white text-lg">Web Developer</p>
        <div className="pt-2">
          <a href="https://drive.google.com/file/d/1zhmPW_HjQG49ufyQZ35nM5A-KsA4vDju/view?usp=sharing">
            <button className="bg-slate-700 px-3 py-2 rounded-xl text-white hover:bg-slate-800">
              Resume Saya
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
