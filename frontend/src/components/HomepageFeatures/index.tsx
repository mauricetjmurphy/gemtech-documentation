import React from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

// Updated FeatureItem type
type FeatureItem = {
  featureData: {
    title: string;
    img: string;
    description: JSX.Element;
  };
};

const featureData = {
  title: "Document it",
  img: require("@site/static/img/documentation.jpg").default,
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
  const { img, title, description } = featureData;
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
  return (
    <section className={styles.features}>
      <div className="container">
        <div>
          <Feature featureData={featureData} />
        </div>
      </div>
    </section>
  );
}
