import styles from "./AboutProjectMockup.module.css";

const AboutProjectMockup = () => {
  return (
    <section className={styles.project__mockup_section}>
      <div className="container">
        <div className={styles.project__mockup_wrapper}>
          <div className={styles.project__info_block}>
            <h3 className={styles.project__block_subtitle}>We did:</h3>
            <p className={styles.project__block_text}>
              In-depth market research was conducted to ensure a clear
              understanding of the product's unique benefits. We developed a
              clean and modern website design, emphasizing simplicity and ease
              of navigation. The product pages were structured to emphasize the
              seamless integration of hidden doors into different interior
              styles, with detailed descriptions, high-quality images, and
              customization options.
            </p>
          </div>
          <div className={styles.project__wrapper_inner}>
            <img
              src="../images/project-mockup.png"
              alt="project mockup"
              className={styles.project__inner_mockup}
            />
          </div>
          <div className={styles.project__info_block}>
            <p className={styles.project__block_text}>
              To improve the user experience, we optimized the website for all
              devices, ensuring fast and smooth browsing. In addition, we
              implemented a smart filtering system that allows users to easily
              find doors based on their preferences, such as size, finish, and
              installation type. SEO best practices were also applied to
              increase visibility and drive relevant traffic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProjectMockup;
