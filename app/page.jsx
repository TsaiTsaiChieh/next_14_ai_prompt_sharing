import Feed from "@components/Feed/Feed";
import styles from "./page.module.css";

const Home = () => {
  return (
    <section className={`${styles.home} flex-center`}>
      <h1 className={`${styles.home__heading} head_text`}>
        Discover & Share
        <br className={styles.home__break} />
        <span className={`${styles.home__highlight} orange_gradient`}>
          {" "}
          AI-Powered Prompts
        </span>
      </h1>
      <p className={styles.home__description}>
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>
      <Feed />
    </section>
  );
};

export default Home;
