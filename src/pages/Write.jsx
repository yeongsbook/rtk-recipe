import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { createRecipe, updateRecipe } from "redux/modules/recipes";
import Textarea from "components/Textarea";
import styles from "styles/pages/Write.module.css";

const items = [
  { property: "title", title: "제목" },
  { property: "summary", title: "요약" },
  { property: "img", title: "이미지" },
  { property: "wayToCook", title: "조리 방법" },
  { property: "origin", title: "출처" },
];

const Item = ({ property, title, autoFocus, currentRecipe }) => {
  return (
    <>
      <label htmlFor={property} className={styles.label}>
        {title}
      </label>
      <Textarea
        id={property}
        name={property}
        autoFocus={autoFocus}
        defaultValue={currentRecipe && currentRecipe[property]}
        required
      />
    </>
  );
};

const Write = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const currentUser = useSelector((state) => state.user);

  if (!currentUser) {
    return <strong>로그인이 필요합니다.</strong>;
  }

  const recipeId = location.state?.recipeId;
  const currentRecipe = recipes.find((e) => e.id === recipeId);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    const userId = currentUser.id;
    if (currentRecipe) {
      dispatch(updateRecipe({ id: currentRecipe.id, userId, ...formProps }));
      navigate("/");
      return;
    }
    dispatch(createRecipe({ id: uuidv4(), userId, ...formProps }));
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      {items.map((item, index) => (
        <Item
          key={item.property}
          property={item.property}
          title={item.title}
          autoFocus={index === 0}
          currentRecipe={currentRecipe}
        />
      ))}
      <button type="submit" className={styles.submit_button}>
        레시피 {currentRecipe ? "수정" : "추가"}
      </button>
    </form>
  );
};

export default Write;
