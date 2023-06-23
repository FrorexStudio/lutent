import styles from './Divider.module.scss';
// import classNames from 'classnames';

export const Divider = () => {
  return (
    <div className={styles.divider}>
      <span className={styles.divider__line}></span>
      <span className={styles.divider__text}>or</span>
      <span className={styles.divider__line}></span>
    </div>
  );
};
