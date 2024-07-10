import { useForm } from 'react-hook-form';
import Header from '../header';
import { useNavigate } from 'react-router-dom';
import style from './signin.module.scss';

const SignIn = () => {
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigateToSignUp = () => {
    navigate('/signup');
  };
  return (
    <>
    <section className={style.sectionsignup}>
      <Header />
      <div className={style.headingpart}>
      <text className={style.mainhead}>login to your account</text>
      <p className={style.mainpp}>or <span className={style.mainp}  onClick={navigateToSignUp}>Register here</span> </p>
      </div>
      <form className={style.signUpForm} onSubmit={handleSubmit((data) => console.log(data))}>
        
         
         
        <div className={style.formField}>
          <label>Email</label>
          <input {...register('email', { required: true, pattern: /^[^@]+@[^@]+\.[^@]+$/ })} className={style.lastnm} placeholder="you@example.com"/>
          {errors.email && <p>Valid email is required.</p>}
        </div>
        <div className={style.formField}>
          <label>Password</label>
          <input type="password" {...register('password', { required: true })} className={style.lastnm} placeholder="Password"/>
          {errors.password && <p>Password is required.</p>}
        </div>
        <div className={style.formField}>
          <label>
            <input type="checkbox" {...register('terms', { required: true })} />
            Remember me
          </label>
          {errors.terms && <p>You must accept the Terms of Service.</p>}
        </div>
        <div className={style.formField}>
          <input type="submit" value="Sign In" />
        </div>
        <div className={style.lastdiv}>
            <small className={style.span}>Forgot your password?</small>
        </div>
      </form>
      </section>
    </>
  );
};

export default SignIn;
