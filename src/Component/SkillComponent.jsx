import ImgJava from "../assets/img/js.png";
import ImgHtml from "../assets/img/html.png";
import ImgReact from "../assets/img/react.png";
import ImgBootstrap from "../assets/img/bootstrap.png";
import ImgCss from "../assets/img/css.png";
import ImgTailwind from "../assets/img/tailwind.png";
import ImgFlowbite from "../assets/img/flowbite.png";
import ImgVScode from "../assets/img/VScode.png";

const SkillComponent = () => {
  return (
    <div className="pt-14" id="skill">
      <div className="Skill  bg-slate-900 pt-5">
        <div className="skill-saya p-5">
          <h1 className="text-2xl text-center text-white font-bold">
            Skill Saya
          </h1>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 p-5">
          <div className="flex justify-center items-center pb-6">
            <div className="group h-20 w-20 [perspective:1000px]">
              <div className="relative h-full w-full rounded-xl shadow-2xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full rounded-xl"
                    src={ImgJava}
                    alt="Javascript"
                  />
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-sm font-bold">Javascript</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center pb-6">
            <div className="group h-20 w-20 [perspective:1000px]">
              <div className="relative h-full w-full rounded-xl shadow-2xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full rounded-xl"
                    src={ImgHtml}
                    alt="HTML5"
                  />
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-sm font-bold">HTML 5</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center pb-6">
            <div className="group h-20 w-20 [perspective:1000px]">
              <div className="relative h-full w-full rounded-xl shadow-2xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full rounded-xl"
                    src={ImgCss}
                    alt="CSS3"
                  />
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-sm font-bold">CSS 3</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center pb-6">
            <div className="group h-20 w-20 [perspective:1000px]">
              <div className="relative h-full w-full rounded-xl shadow-2xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full rounded-xl"
                    src={ImgReact}
                    alt="React JS"
                  />
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-sm font-bold">React JS</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center pb-6">
            <div className="group h-20 w-20 [perspective:1000px]">
              <div className="relative h-full w-full rounded-xl shadow-2xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full rounded-xl"
                    src={ImgBootstrap}
                    alt="Boostrap"
                  />
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-sm font-bold">Boostrap</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center pb-6">
            <div className="group h-20 w-20 [perspective:1000px]">
              <div className="relative h-full w-full rounded-xl shadow-2xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full rounded-xl"
                    src={ImgTailwind}
                    alt="Tailwind"
                  />
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-sm font-bold">Tailwind</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center pb-6">
            <div className="group h-20 w-20 [perspective:1000px]">
              <div className="relative h-full w-full rounded-xl shadow-2xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full rounded-xl"
                    src={ImgFlowbite}
                    alt="Flowbite"
                  />
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-sm font-bold">Flowbite</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center pb-6">
            <div className="group h-20 w-20 [perspective:1000px]">
              <div className="relative h-full w-full rounded-xl shadow-2xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full rounded-xl object-cover"
                    src={ImgVScode}
                    alt="VScode"
                  />
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-sm font-bold">VSCode</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillComponent;
