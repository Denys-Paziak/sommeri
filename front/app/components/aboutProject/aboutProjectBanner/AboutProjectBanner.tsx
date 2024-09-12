import styles from "./AboutProjectBanner.module.css";
import {ProjectInterface} from "@/app/project/[id]/ProjectInterface";

const AboutProjectBanner = ({project}: {project: ProjectInterface}) => {
  return (
    <section className={styles.project__banner_section}>
      <div className={styles.project__banner_wrapper}>
        <img
          src={project.attributes.Hero_image.data.attributes.url}
          alt="project about img"
          className={styles.project__banner_image}
        />
      </div>
    </section>
  );
};

export default AboutProjectBanner;
