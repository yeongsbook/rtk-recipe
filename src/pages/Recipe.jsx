import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { deleteRecipe } from "redux/modules/recipes";
import styles from "styles/pages/Recipe.module.css";

const Recipe = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user);
  const recipes = useSelector((state) => state.recipes);
  const recipe = recipes.find((e) => e.id === params.id);

  if (!recipe) {
    return <strong>레시피가 존재하지 않습니다.</strong>;
  }

  const handleDeleteButtonClick = () => {
    const isConfirmed = window.confirm("정말 삭제하시겠습니까?");
    if (!isConfirmed) return;
    dispatch(deleteRecipe(recipe.id));
    navigate("/");
  };

  return (
    <>
      <div className={styles.image_area}>
        <img src={recipe.img} alt="" />
      </div>
      <h2 className={styles.main_title}>{recipe.title}</h2>
      <pre className={`${styles.pre} ${styles.summary}`}>{recipe.summary}</pre>
      <pre className={styles.pre}>{recipe.wayToCook}</pre>
      <div className={styles.origin}>
        <strong>출처</strong> :{" "}
        <a
          href={recipe.origin}
          className={styles.link}
          target="_blank"
          rel="noreferrer"
        >
          {recipe.origin}
        </a>
      </div>
      {currentUser && currentUser.id === recipe.userId && (
        <>
          <Link
            to="/write"
            state={{ recipeId: recipe.id }}
            className={styles.bottom_button}
          >
            수정
          </Link>
          <button
            type="button"
            className={styles.bottom_button}
            onClick={handleDeleteButtonClick}
          >
            삭제
          </button>
        </>
      )}
    </>
  );
};

export default Recipe;
