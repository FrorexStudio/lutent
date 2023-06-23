import styles from './Button.module.scss';
import classNames from 'classnames';

interface IProps {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  children: React.ReactNode;
}

export const Button = ({ startIcon, endIcon, children, variant }: IProps) => {
  return (
    <button className={classNames(styles.btn, { [styles.btn__primary]: variant === 'primary' })}>
      {startIcon && <span>{startIcon}</span>}
      {children}
      {endIcon && <span>{endIcon}</span>}
    </button>
  );
};
