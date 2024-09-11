import styles from "./AboutProjectBanner.module.css";

const AboutProjectBanner = () => {
  return (
    <section className={styles.project__banner_section}>
      <div className={styles.project__banner_wrapper}>
        <img
          src="../images/project-about.jpg"
          alt="project about img"
          className={styles.project__banner_image}
        />
      </div>
    </section>
  );
};

export default AboutProjectBanner;
