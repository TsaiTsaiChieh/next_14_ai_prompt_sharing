// import { styles } from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <span>{`Deploy Date: ${process.env.NEXT_PUBLIC_BUILD_DATE}`}</span>
      <br />
      <span>{`Deploy branch: ${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF}`}</span>
    </footer>
  );
};

export default Footer;
