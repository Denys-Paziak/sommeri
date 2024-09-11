import styles from "./AboutProjectFrame.module.css";

const AboutProjectFrame = () => {
  return (
    <section className={styles.project__frame_section}>
      <div className="container">
        <div className={styles.project__frame_wrapper}>
          <img
            src="../images/project-full-image.png"
            alt="project frame"
            className={styles.project__frame_image}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutProjectFrame;
