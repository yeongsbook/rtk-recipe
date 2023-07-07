import { useEffect, useRef } from "react";
import styles from "styles/components/Textarea.module.css";

const BORDER_WIDTH = 1;

const Textarea = ({ id, name, required, defaultValue, autoFocus }) => {
  const ref = useRef(null);

  const handleChange = () => {
    const { current } = ref;
    if (!current) return;
    current.style.height = "auto";
    current.style.height = `${current.scrollHeight + BORDER_WIDTH * 2}px`;
  };

  useEffect(() => {
    handleChange();
  }, []);

  return (
    <textarea
      ref={ref}
      rows={1}
      id={id}
      name={name}
      defaultValue={defaultValue}
      autoFocus={autoFocus}
      className={styles.textarea}
      onChange={handleChange}
      required={required}
    />
  );
};

export default Textarea;
