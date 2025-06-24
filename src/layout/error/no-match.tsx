import styles from "./styles.module.scss";
const NoMatch = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>404</div>
      <div className={styles.content}>
        <p>So sorry</p>
        <p>We couldn't find what you were looking for...</p>
      </div>
    </div>
  );
};

export default NoMatch;
