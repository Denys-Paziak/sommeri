import AboutProjectTopBar from "@/app/components/aboutProject/aboutProjectTopBar/AboutProjectTopBar";
import AboutProjectBanner from "@/app/components/aboutProject/aboutProjectBanner/AboutProjectBanner";
import AboutProjectInfo from "@/app/components/aboutProject/aboutProjectInfo/AboutProjectInfo";
import AboutProjectFrame from "@/app/components/aboutProject/aboutProjectFrame/AboutProjectFrame";
import AboutProjectMockup from "@/app/components/aboutProject/aboutProjectMockup/AboutProjectMockup";
import AboutProjectGalery from "@/app/components/aboutProject/aboutProjectGalery/AboutProjectGalery";
import AboutProjectSimilar from "@/app/components/aboutProject/aboutProjectSimilar/AboutProjectSimilar";
import AboutProjectReviews from "@/app/components/aboutProject/aboutProjectReviews/AboutProjectReviews";

const AboutProject = () => {
    return (
        <main>
            <AboutProjectTopBar/>
            <AboutProjectBanner/>
            <AboutProjectInfo/>
            <AboutProjectFrame/>
            <AboutProjectMockup/>
            <AboutProjectGalery/>
            <AboutProjectSimilar/>
            <AboutProjectReviews/>
        </main>
    );
};

export default AboutProject;
