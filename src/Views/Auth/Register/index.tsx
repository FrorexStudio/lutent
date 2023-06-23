import styles from './Register.module.scss';
import classNames from 'classnames';

// Components
import { Input } from '../../../Components/UI/Input';
import { Checkbox } from '../../../Components/UI/Checkbox';
import { Divider } from '../../../Components/UI/Divider';
import { SocialButton } from '../../../Components/UI/SocialButton';
import { Button } from '../../../Components/UI/Button';

import { SubmitHandler, useForm } from 'react-hook-form';
// import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { useState } from 'react';

const schema = Joi.object({
  login: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  repeatPassword: Joi.string().valid(Joi.ref('password')).required().messages({
    'any.only': 'Passwords must match'
  }),
  chooseCb: Joi.boolean().valid(true).required()
});

interface IForm {
  login: string;
  email: string;
  password: string;
  repeatPassword: string;
  chooseCb: boolean;
}

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IForm>();
  const [formError, setFormError] = useState<string | null>(null);

  // {
  //   resolver: joiResolver(schema);
  // }
  // const onSubmit: SubmitHandler<IForm> = async (data) => {
  //   console.log(data);
  // };

  const onSubmit: SubmitHandler<IForm> = async (data) => {
    try {
      await schema.validateAsync(data);
      console.log(data);
    } catch (error: any) {
      setFormError(error.details[0].message);
    }
  };

  // Display validation errors
  console.log(errors);

  // Handle form error
  console.log(formError);

  return (
    <header className={classNames(styles.Auth, styles.wrapper)}>
      <div className={styles.block}>
        <img
          src="https://images.unsplash.com/photo-1683184839603-45e44c80ca8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt=""
        />
      </div>
      <div className={styles.col}>
        <div className={styles.content}>
          <div className={styles.content__header}>
            <h2>Create an Account</h2>
            <p>Let’s get started with your 30day free trial.</p>
          </div>
          <SocialButton text="Sign up with Google"></SocialButton>
          <Divider />
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Input
              title="Login"
              error={false}
              type="text"
              placeholder="Enter Login"
              required
              {...register('login')}
            />
            <Input
              title="Email"
              error={false}
              type="email"
              placeholder="Enter Email"
              required
              {...register('email')}
            />
            <Input
              title="Password"
              error={false}
              type="password"
              placeholder="Enter Password"
              required
              {...register('password')}
            />
            <Input
              title="Repeat Password"
              error={false}
              type="password"
              placeholder="Enter Password"
              required
              {...register('repeatPassword')}
            />

            <div className={styles.form__checkboxWrapper}>
              <Checkbox
                type="checkbox"
                id="formAllow"
                label="Allow"
                required
                defaultChecked
                {...register('chooseCb')}
              />
            </div>
            {/* <Button value="Create Account" variant={'primary'}></Button> */}
            <Button variant={'primary'}>Create Account</Button>
          </form>
        </div>
      </div>
    </header>
  );
};
