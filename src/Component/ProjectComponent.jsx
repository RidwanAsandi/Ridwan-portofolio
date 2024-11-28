import { Card } from "flowbite-react";
import ImgProject1 from "../assets/img-project/Project-1.png";
import ImgProject2 from "../assets/img-project/Project-2.png";

const ProjectComponent = () => {
  return (
    <div className="Project" id="project">
      <div className="m-3">
        <div className="box-1 pt-14">
          <h1 className="text-2xl text-center font-bold ">Project Saya</h1>
        </div>
        <div className="box-2 flex justify-center items-center">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="pt-5">
              <Card
                className="max-w-sm shadow-xl shadow-slate-500 object-cover min-h-full"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={ImgProject1}
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Website Penjualan Hijab Angels Khimar
                </h5>

                <a href="https://angles-khimar.vercel.app/">
                  <button className="bg-slate-900 py-3 px-7  text-white rounded-full">
                    Read More
                  </button>
                </a>
              </Card>
            </div>
            <div className="pt-6">
              <Card
                className="max-w-sm shadow-xl shadow-slate-500 object-cover min-h-full"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={ImgProject2}
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Website Bengkel Motor Pojok Garasi
                </h5>
                <a href="https://github.com/RidwanAsandi/PojokGarasi">
                  <button className="bg-slate-900 py-3 px-7  text-white rounded-full">
                    Read More
                  </button>
                </a>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;

// 1896 x 850
