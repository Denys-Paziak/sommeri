import AboutProjectTopBar from "@/app/components/aboutProject/aboutProjectTopBar/AboutProjectTopBar";
import AboutProjectBanner from "@/app/components/aboutProject/aboutProjectBanner/AboutProjectBanner";
import AboutProjectInfo from "@/app/components/aboutProject/aboutProjectInfo/AboutProjectInfo";
import AboutProjectFrame from "@/app/components/aboutProject/aboutProjectFrame/AboutProjectFrame";
import AboutProjectMockup from "@/app/components/aboutProject/aboutProjectMockup/AboutProjectMockup";
import AboutProjectGalery from "@/app/components/aboutProject/aboutProjectGalery/AboutProjectGalery";

const AboutProject = () => {
  return (
    <main>
      <AboutProjectTopBar />
      <AboutProjectBanner />
      <AboutProjectInfo />
      <AboutProjectFrame />
      <AboutProjectMockup />
      <AboutProjectGalery />
    </main>
  );
};

export default AboutProject;
