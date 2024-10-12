import styles from "./Footer.module.css";

const Footer = () => {
  const formatDate = isoDateString => {
    const date = new Date(isoDateString);

    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: userTimeZone,
      timeZoneName: "short",
    };

    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      date
    );

    return formattedDate;
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
