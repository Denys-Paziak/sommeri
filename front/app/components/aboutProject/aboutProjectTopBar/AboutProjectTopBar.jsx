import styles from "./AboutProjectTopBar.module.css";

const AboutProjectTopBar = () => {
  return (
    <section className={styles.project__top_section}>
      <div className="container">
        <div className={styles.project__top_wrapper}>
          <div className={styles.project__top_info}>
            <h2 className={styles.project__top_name}>Project Name</h2>
            <p className={styles.project__top_type}>landing page</p>
          </div>
          <button className={styles.project__top_visit} type="button">
            <span className={styles.project__visit_text}>Visit</span>
            <span className={styles.project__visit_icon}>
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.9498 1.55026L1.0503 11.4498M10.9498 1.55026L10.9498 10.0355M10.9498 1.55026L2.46451 1.55026"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutProjectTopBar;
