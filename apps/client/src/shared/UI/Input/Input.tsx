import styles from "./styles/input.module.scss";

const Input = ({
  title,
  placeholder,
  name,
}: {
  title: string;
  placeholder: string;
  name: string;
}) => {
  return (
    <div className={styles.block}>
      <h3 className={styles.title}>{title}</h3>
      <input
        className={styles.input}
        name={name}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
