import Sidebar from "@/src/components/Sidebar";
import Carousel from "@/src/components/Carousel";
import RightPanel from "@/src/components/RightPanel";
import NoticeSection from "@/src/components/NoticeSection";
import MissionVision from "@/src/components/MissionVision";
import HodMessage from "@/src/components/HodMessage";
import DepartmentAchievements from "@/src/components/DepartmentAchievements";
import DepartmentPrograms from "@/src/components/DepartmentPrograms";
import OurFaculty from "@/src/components/OurFaculty";
import Gallery from "@/src/components/Gallery";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="bg-gray-100 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 px-6 items-stretch">

          <div className="lg:col-span-3">
            <Sidebar />
          </div>

          <div className="lg:col-span-6">
            <Carousel />
          </div>

          <div className="lg:col-span-3 flex">
            <RightPanel />
          </div>

        </div>
      </div>

      {/* ANNOUNCEMENT SECTION */}
      <NoticeSection />
      <MissionVision />
      
    <HodMessage 
      hodName="Dr. Arup Roy"
      hodTitle="Professor & Head of Department"
      hodImage="/HOD.jpeg" // Your actual image path
      message="Welcome to the Department of Information Technology. Our goal is to create an environment where students can learn, grow, and prepare for successful careers. We focus on building strong fundamentals while keeping up with industry trends."
    />
    < DepartmentAchievements />
    <DepartmentPrograms/>

    <OurFaculty/>

    <Gallery/>

    </>
  );
}