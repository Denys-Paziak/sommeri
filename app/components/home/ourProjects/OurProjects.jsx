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
            <div className={styles.projects__main_portfolio}>
              <div className={styles.project__portfolio_item}>
                <div className={styles.project__item_banner}>
                  <img
                    src="../images/project-1.png"
                    alt="project img"
                    className={styles.project__banner_item}
                  />
                  <div className={styles.project__banner_inner}>
                    <h4 className={styles.project__inner_name}>Project Name</h4>
                    <span className={styles.project__inner_visit}>
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
                  </div>
                  <div className={styles.project__banner_price}>
                    <span className={styles.project__price_text}>$750</span>
                  </div>
                  <button className={styles.project__banner_view} type="button">
                    <span className={styles.project__view_text}>View</span>
                  </button>
                </div>
                <div className={styles.project__item_info}>
                  <p className={styles.project__info_category}>E-commerce</p>
                  <p className={styles.project__info_categories}>
                    <span className={styles.project__categories_item}>
                      Figma
                    </span>
                    <span className={styles.project__categories_item}>
                      WordPress
                    </span>
                  </p>
                </div>
              </div>
              <div className={styles.project__portfolio_item}>
                <div className={styles.project__item_banner}>
                  <img
                    src="../images/project-1.png"
                    alt="project img"
                    className={styles.project__banner_item}
                  />
                  <div className={styles.project__banner_inner}>
                    <h4 className={styles.project__inner_name}>Project Name</h4>
                    <span className={styles.project__inner_visit}>
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
                  </div>
                  <div className={styles.project__banner_price}>
                    <span className={styles.project__price_text}>$750</span>
                  </div>
                  <button className={styles.project__banner_view} type="button">
                    <span className={styles.project__view_text}>View</span>
                  </button>
                </div>
                <div className={styles.project__item_info}>
                  <p className={styles.project__info_category}>E-commerce</p>
                  <p className={styles.project__info_categories}>
                    <span className={styles.project__categories_item}>
                      Figma
                    </span>
                    <span className={styles.project__categories_item}>
                      WordPress
                    </span>
                  </p>
                </div>
              </div>
              <div className={styles.project__portfolio_item}>
                <div className={styles.project__item_banner}>
                  <img
                    src="../images/project-1.png"
                    alt="project img"
                    className={styles.project__banner_item}
                  />
                  <div className={styles.project__banner_inner}>
                    <h4 className={styles.project__inner_name}>Project Name</h4>
                    <span className={styles.project__inner_visit}>
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
                  </div>
                  <div className={styles.project__banner_price}>
                    <span className={styles.project__price_text}>$750</span>
                  </div>
                  <button className={styles.project__banner_view} type="button">
                    <span className={styles.project__view_text}>View</span>
                  </button>
                </div>
                <div className={styles.project__item_info}>
                  <p className={styles.project__info_category}>E-commerce</p>
                  <p className={styles.project__info_categories}>
                    <span className={styles.project__categories_item}>
                      Figma
                    </span>
                    <span className={styles.project__categories_item}>
                      WordPress
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
