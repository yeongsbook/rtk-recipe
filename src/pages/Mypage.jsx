import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "styles/pages/Mypage.module.css";

const Mypage = () => {
  const currentUser = useSelector((state) => state.user);
  const recipes = useSelector((state) => state.recipes);

  if (!currentUser) {
    return <strong>로그인이 필요합니다.</strong>;
  }

  const filteredList = recipes.filter((e) => e.userId === currentUser.id);

  return (
    <>
      <h2 className={styles.main_title}>내 정보</h2>
      <div className={styles.info_item}>
        <strong className={styles.info_title}>이름</strong>
        <div className={styles.info_desc}>{currentUser.name}</div>
      </div>
      {filteredList.length > 0 && (
        <div className={styles.recipes}>
          <strong className={styles.recipes_title}>내 레시피</strong>
          <ul className={styles.list}>
            {filteredList.map((item) => (
              <li key={item.id} className={styles.item}>
                <Link to={`/recipe/${item.id}`} className={styles.link}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Mypage;
