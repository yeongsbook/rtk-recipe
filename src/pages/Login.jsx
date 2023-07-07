import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "styles/pages/Login.module.css";
import mockUsers from "data/users";
import { login, logout } from "redux/modules/user";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user);

  const handleLoginButtonClick = (user) => {
    dispatch(login(user));
    navigate("/");
  };

  const handleLogoutButtonClick = () => {
    dispatch(logout());
  };

  return (
    <>
      <h2 className={styles.title}>로그인 목록</h2>
      <ul className={styles.list}>
        {mockUsers.map((item) => (
          <li key={item.id} className={styles.item}>
            <button
              type="button"
              className={styles.login_button}
              onClick={() => {
                handleLoginButtonClick(item);
              }}
              disabled={item.id === currentUser?.id}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
      {currentUser && (
        <button
          type="button"
          className={styles.logout_button}
          onClick={handleLogoutButtonClick}
        >
          로그아웃
        </button>
      )}
    </>
  );
};

export default Login;
