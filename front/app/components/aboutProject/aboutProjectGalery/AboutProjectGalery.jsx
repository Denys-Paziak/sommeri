import styles from "./AboutProjectGalery.module.css";

const AboutProjectGalery = () => {
  return (
    <section className={styles.project__galery_section}>
      <div className="container">
        <div className={styles.project__galery_wrapper}>
          <div className={styles.project__wrapper_banners}>
            <div className={styles.project__banners_item}>
              <img
                src="../images/project-galery-1.jpg"
                alt="project galery img"
                className={styles.project__item_img}
              />
            </div>
            <div className={styles.project__banners_item}>
              <img
                src="../images/project-galery-2.jpg"
                alt="project galery img"
                className={styles.project__item_img}
              />
            </div>
            <div className={styles.project__banners_item}>
              <img
                src="../images/project-galery-3.jpg"
                alt="project galery img"
                className={styles.project__item_img}
              />
            </div>
            <div className={styles.project__banners_item}>
              <img
                src="../images/project-galery-4.jpg"
                alt="project galery img"
                className={styles.project__item_img}
              />
            </div>
          </div>
          <div className={styles.project__wrapper_result}>
            <div className={styles.project__inner_block}>
              <h3 className={styles.project__block_subtitle}>Result:</h3>
              <div className={styles.project__result_info}>
                <p className={styles.project__block_text}>
                  As a result of our efforts, we have created a user-friendly
                  website that fully reflects the premium nature of the hidden
                  door products. The site now offers an intuitive and simplified
                  user interface, allowing potential customers to easily explore
                  the product range, customize their selection and find the
                  perfect hidden door for their interior.
                </p>
                <p className={styles.project__block_text}>
                  The modern minimalist design, combined with optimized
                  navigation and responsive operation on all devices, has
                  significantly increased user engagement and satisfaction.
                  SEO-optimized content is already driving traffic to the site,
                  resulting in greater visibility and more qualified leads.
                </p>
                <p className={styles.project__block_text}>
                  The overall result is a professional, aesthetically pleasing
                  platform that positions the brand as a leader in the hidden
                  door market
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProjectGalery;
