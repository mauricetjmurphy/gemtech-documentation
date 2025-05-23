import React from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import { useColorMode } from "@docusaurus/theme-common"; // Import the hook from Docusaurus

// Updated FeatureItem type
type FeatureItem = {
  featureData: {
    title: string;
    imgLight: string; // Light mode image
    imgDark: string; // Dark mode image
    description: JSX.Element;
  };
};

// Feature data with light and dark images
const featureData = {
  title: "Document it...",
  imgLight: require("@site/static/img/documentation.jpg").default,
  imgDark: require("@site/static/img/documentation-dark.jpg").default, // Add dark mode image
  description: (
    <>
      Programming without documentation is like cooking without a recipe – you
      might end up with something tasty, but you’ll never be able to recreate
      it!
    </>
  ),
};

// Feature component
function Feature({ featureData }: FeatureItem) {
  const { colorMode } = useColorMode(); // Access the current color mode
  const { imgLight, imgDark, title, description } = featureData;

  // Select the image based on the current theme
  const img = colorMode === "dark" ? imgDark : imgLight;

  return (
    <div className={clsx("center")}>
      <div className="text--center">
        <img src={img} alt={title} role="img" />
      </div>
      <div className="text--center">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

// Main component to display homepage features
export default function HomepageFeatures(): JSX.Element {
  const { colorMode } = useColorMode(); // Access the current color mode
  return (
    <section
      className={colorMode === "light" ? styles.features : styles.darkFeatures}
    >
      <div className="container">
        <div style={{ paddingTop: "80px" }}>
          <Feature featureData={featureData} />
        </div>
      </div>
    </section>
  );
}
