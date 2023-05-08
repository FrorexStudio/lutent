import { InputHTMLAttributes, forwardRef } from 'react';

//styles
import styles from './Checkbox.module.scss';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type: 'checkbox' | 'radio';
  id: string;
}

export const Checkbox = forwardRef<HTMLInputElement, IInputProps>(({ ...props }, ref) => {
  return (
    <div className={styles.checkbox}>
      <input {...props} />
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
    </div>
  );
});
