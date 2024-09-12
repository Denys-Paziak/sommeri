import styles from "./AboutProjectSimilar.module.css";
import SimilarProjects from "@/app/components/similarProjects/SimilarProjects";

const AboutProjectSimilar = () => {
  return (
    <section className={styles.similar__projects_section}>
      <div className="container">
        <div className={styles.similar__project_wrapper}>
          <h3 className={styles.similar__wrapper_title}>Similar projects:</h3>
          <SimilarProjects />
        </div>
      </div>
    </section>
  );
};

export default AboutProjectSimilar;
