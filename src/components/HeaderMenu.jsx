import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "styles/components/Layout.module.css";

const list = [
  { name: "로그인", path: "/login", loginRequired: false },
  { name: "내 정보", path: "/mypage", loginRequired: true },
  { name: "글쓰기", path: "/write", loginRequired: true },
];

const HeaderMenu = () => {
  const { pathname } = useLocation();
  const currentUser = useSelector((state) => state.user);
  const [isOn, setOn] = useState(false);
  const menuRef = useRef(null);
  const filteredList = list.filter((e) => {
    // 현재 페이지는 메뉴에서 안보여줌
    if (e.path === pathname) return false;
    // 로그인 상태라면 loginRequired와 상관없이 전부 노출
    if (currentUser) return true;
    // 로그아웃 상태라면 loginRequired가 false인 것만 노출
    return !e.loginRequired;
  });

  const handleClick = () => {
    setOn(!isOn);
  };

  useEffect(() => {
    const closeMenu = (e) => {
      if (!isOn) return;
      const menu = menuRef.current;
      if (!menu) return;
      if (menu.contains(e.target)) return;
      setOn(false);
    };
    document.addEventListener("click", closeMenu);

    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [isOn]);

  if (filteredList.length === 0) return <></>;
  return (
    <div ref={menuRef} className={styles.header_menu}>
      <button
        type="button"
        className={`${styles.menu_button} ${isOn && styles.on}`}
        onClick={handleClick}
      >
        <span className={styles.text}>메뉴</span>
      </button>
      <ul className={styles.menu_list}>
        {filteredList.map((item) => (
          <li key={item.path} className={styles.menu_item}>
            <Link to={item.path} className={styles.menu_link}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderMenu;
