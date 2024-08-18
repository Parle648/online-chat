import styles from "./styles/input.module.scss";

const Input = ({
  title,
  placeholder,
  register,
}: {
  title: string;
  placeholder: string;
  name?: string;
  register?: any;
}) => {
  return (
    <div className={styles.block}>
      <h3 className={styles.title}>{title}</h3>
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        {...register}
      />
    </div>
  );
};

export default Input;
