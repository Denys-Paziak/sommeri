import styles from "./OurProjects.module.css";

const OurProjects = () => {
  return (
    <section className={styles.projects__section}>
      <div className="container">
        <div className={styles.projects__wrapper}>
          <div className={styles.projects__wrapper_heading}>
            <h2 className={styles.projects__heading_title}>
              We are proud of our projects
            </h2>
            <h3 className={styles.projects__heading_subtitle}>
              Our work is a combination of aesthetics and functionality to
              achieve your business goals.
            </h3>
          </div>
          <div className={styles.projects__wrapper_main}>
            <div className={styles.projects__main_categories}>
              <ul className={styles.projects__categories_list}>
                <li
                  className={`${styles.projects__category_item} ${styles.active}`}
                >
                  All Projects
                </li>
                <li className={styles.projects__category_item}>E-Commerce</li>
                <li className={styles.projects__category_item}>
                  Corporate Website
                </li>
                <li className={styles.projects__category_item}>
                  Web Application
                </li>
                <li className={styles.projects__category_item}>Landing Page</li>
                <li className={styles.projects__category_item}>Portfolio</li>
              </ul>
            </div>
            <div className={styles.projects__main_portfolio}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
