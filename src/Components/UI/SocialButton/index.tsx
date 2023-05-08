import styles from './SocialButton.module.scss';

interface IProps {
  text: string;
}

export const SocialButton = ({ text }: IProps) => {
  return <button className={styles.btn}>{text}</button>;
};
