import { Link } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";
import styles from "styles/components/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <h1 className={styles.header_title}>
            <Link to="/" className={styles.header_link}>
              RTK Recipe
            </Link>
          </h1>
          <HeaderMenu />
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.inner}>{children}</div>
      </main>
    </>
  );
};

export default Layout;
