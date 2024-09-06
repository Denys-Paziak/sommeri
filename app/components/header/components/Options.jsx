import React from "react";
import styles from "../Header.module.css";
import PrimaryButtonArrow from "@/app/components/UI/primary-button-arrow/PrimaryButtonArrow";

const Options = () => {
  return (
    <div className={styles.header__wrapper_options}>
      <PrimaryButtonArrow>Contact us</PrimaryButtonArrow>
    </div>
  );
};

export default Options;
