import styles from "./Footer.module.css";

const Footer = () => {
  const formatDate = isoDateString => {
    const offsetHours = new Date(isoDateString).getTimezoneOffset() / -60;
    const formattedOffset = `${offsetHours >= 0 ? "+" : ""}${Math.abs(
      offsetHours
    )}`;
  };
  return (
    <footer className={styles.footer}>
      <span>{`Deploy Date: ${formatDate(
        process.env.NEXT_PUBLIC_BUILD_DATE
      )}`}</span>
      <br />
      <span>{`Deploy branch: ${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF}`}</span>
    </footer>
  );
};

export default Footer;
