import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "styles/pages/Home.module.css";

const Home = () => {
  const recipes = useSelector((state) => state.recipes);

  return (
    <>
      <ul className={styles.list}>
        {recipes.map((item) => (
          <li key={item.id} className={styles.item}>
            <Link to={`/recipe/${item.id}`} className={styles.card}>
              <div className={styles.thumbnail}>
                <img src={item.img} alt="" />
              </div>
              <strong className={styles.title}>{item.title}</strong>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
