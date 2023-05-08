import { InputHTMLAttributes, forwardRef } from 'react';

//styles
import styles from './Input.module.scss';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  error: boolean;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ title, error, ...props }, ref) => {
    return (
      <div className={styles.input}>
        <label htmlFor={title}>{title}</label>
        <div className={styles.input__block}>
          <input ref={ref} id={title} {...props} />
          {/* {error && <h2>Error</h2>} */}
        </div>
        {error && <span>Error</span>}
      </div>
    );
  }
);
