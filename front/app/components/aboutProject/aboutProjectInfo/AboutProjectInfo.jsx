import styles from "./AboutProjectInfo.module.css";
import LineVector from "@/app/components/lineVector/LineVector";

const AboutProjectInfo = () => {
  return (
    <section className={styles.project__info_section}>
      <div className="container">
        <div className={styles.project__info_wrapper}>
          <div className={styles.project__wrapper_inner}>
            <div className={styles.project__inner_block}>
              <h3 className={styles.project__block_subtitle}>
                About the project:
              </h3>
              <p className={styles.project__block_text}>
                This project focuses on creating a sleek and modern website for
                a company specializing in hidden interior doors. These doors not
                only blend seamlessly with any interior design but also add a
                sense of elegance and innovation to any space. The company's
                products are designed for those who appreciate minimalism,
                functionality, and aesthetics in their homes or commercial
                spaces.
              </p>
            </div>
            <div className={styles.project__inner_block}>
              <h3 className={styles.project__block_subtitle}>Objectives:</h3>
              <p className={styles.project__block_text}>
                The goal of this project is to develop an adaptive website that
                will showcase the uniqueness and high-quality craftsmanship of
                the hidden door solutions. The site should effectively
                communicate the premium nature of the brand, highlighting the
                seamless integration of doors into various architectural styles.
                The page must include comprehensive information about the
                product range, customization options, and installation services.
              </p>
            </div>
            <div className={styles.project__inner_block}>
              <h3 className={styles.project__block_subtitle}>Solution:</h3>
              <p className={styles.project__block_text}>
                Many websites for interior solutions are often cluttered with
                unnecessary details, overwhelming potential customers. The
                solution is a streamlined, user-friendly website with a
                minimalist layout that focuses on the essential information. The
                homepage will provide all key product details, allowing visitors
                to quickly find the hidden door solutions that best suit their
                needs. By prioritizing simplicity and efficiency, the website
                will guide users effortlessly, making their browsing experience
                smooth and time-efficient.
              </p>
            </div>
            <div className={styles.project__inner_block}>
              <h3 className={styles.project__block_subtitle}>Technologies:</h3>
              <div className={styles.project__block_technologies}>
                <span className={styles.project__technologies_item}>HTML</span>
                <span className={styles.project__technologies_item}>CSS</span>
                <span className={styles.project__technologies_item}>
                  JavaScript
                </span>
                <span className={styles.project__technologies_item}>
                  WordPress
                </span>
                <span className={styles.project__technologies_item}>PHP</span>
              </div>
            </div>
          </div>
          <div className={styles.project__info_vector}>
            <LineVector/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProjectInfo;
