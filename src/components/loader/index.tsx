import styles from "./styles.module.scss";
function Loader({
  color = "var(--gray-600)",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={styles.container} {...props}>
      <div className={styles.threeDots}>
        <div className={styles.spinner}>
          <div
            className={styles.bounce1}
            style={{ backgroundColor: color }}
          ></div>
          <div
            className={styles.bounce2}
            style={{ backgroundColor: color }}
          ></div>
          <div
            className={styles.bounce3}
            style={{ backgroundColor: color }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
