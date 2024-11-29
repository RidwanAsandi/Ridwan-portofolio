import ProfileImg from "../assets/img/Ridwan.png";
import {
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";

function AboutComponent() {
  return (
    <div className="about px-4 py-2 " id="about">
      <div className="container text-center mt-16">
        <div className="tentang-saya">
          <h1 className="text-2xl text-center font-bold">Tentang Saya</h1>
        </div>
        <div className="grid px-2 py-3  gap-2 md:grid-cols-2 xl:grid-cols-2">
          <div className="box-1">
            <div className="flex justify-center items-center">
              <img src={ProfileImg} width={250} alt="Ridwan Asandi" />
            </div>
            <h1 className="font-semibold text-xl pt-2">Ridwan Asandi</h1>
            <h4>Frontend Developer</h4>
          </div>
          <div className="box-2 text-justify pt-10">
            <p>
              Lulusan Sarjana Teknik Informatika yang memiliki minat bekerja di
              bidang IT dan saya juga pribadi yang mudah beradaptasi dalam
              lingkungan baru, sangat bersungguh-sungguh terhadap pekerjaan,
              bertanggung jawab, jujur, ramah, sopan santun, dapat bekerjasama
              dengan tim, sangat mengedepankan kedisplinan dan profesionalitas
              dalam bekerja.
            </p>
            <h3 className="text-lg font-semibold pt-5">Pendidikan Saya</h3>
            <Timeline className="pt-2">
              <TimelineItem>
                <TimelinePoint />
                <TimelineContent>
                  <TimelineTime>2013 - 2016</TimelineTime>
                  <TimelineTitle>SMK AL-HIDAYAH 1</TimelineTitle>
                  <TimelineBody>TEKNIK KOMPUTER DAN JARINGAN</TimelineBody>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelinePoint />
                <TimelineContent>
                  <TimelineTime>2017 - 2021</TimelineTime>
                  <TimelineTitle>UNIVERSITAS INDRAPRASTA PGRI</TimelineTitle>
                  <TimelineBody>S1 TEKNIK INFORMATIKA | IPK 3.23</TimelineBody>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
        </div>
      </div>
      {/* <div className="pendidikan" id="pendidikan">
        <h3 className="text-lg font-semibold pt-20">Pendidikan Saya</h3>
        <Timeline className="pt-2">
          <TimelineItem>
            <TimelinePoint />
            <TimelineContent>
              <TimelineTime>2013 - 2016</TimelineTime>
              <TimelineTitle>SMK AL-HIDAYAH 1</TimelineTitle>
              <TimelineBody>TEKNIK KOMPUTER DAN JARINGAN</TimelineBody>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelinePoint />
            <TimelineContent>
              <TimelineTime>2017 - 2021</TimelineTime>
              <TimelineTitle>UNIVERSITAS INDRAPRASTA PGRI</TimelineTitle>
              <TimelineBody>S1 TEKNIK INFORMATIKA | IPK 3.23</TimelineBody>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div> */}
    </div>
  );
}

export default AboutComponent;
