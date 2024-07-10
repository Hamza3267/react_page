import { useForm } from 'react-hook-form';
import Header from '../header';
import { useNavigate } from 'react-router-dom';
import style from './signup.module.scss';

const SignUp = () => {
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigateToSignIn = () => {
    navigate('/signin');
  };
  return (
    <>
    <section className={style.sectionsignup}>
      <Header />
      <div className={style.headingpart}>
      <text className={style.mainhead}>Sign up now!</text>
      <p className={style.mainp}>Signing up is easy!</p>
      </div>
      <form className={style.signUpForm} onSubmit={handleSubmit((data) => console.log(data))}>
        <div className={style.formGroup}>
          <div className={style.formField}>
            <label>First Name</label>
            <input {...register('firstName', { required: true })}className={style.lastnm}  placeholder="First Name"/>
            {errors.firstName && <p>First name is required.</p>}
          </div>
          <div className={style.formField}>
            <label>Last Name</label>
            <input {...register('lastName', { required: true })} className={style.lastnm} placeholder="Last Name"/>
            {errors.lastName && <p>Last name is required.</p>}
          </div>
        </div>
        <div className={style.formField}>
          <label>Company Name</label>
          <input {...register('companyName')} className={style.lastnm} placeholder="Company Name"/>
        </div>
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
            I accept the <span className={style.span1}>Terms of Service</span>
          </label>
          {errors.terms && <p>You must accept the Terms of Service.</p>}
        </div>
        <div className={style.formField}>
          <input type="submit" value="Sign Up" />
        </div>
        <div className={style.lastdiv}>
            <small>Already have an account? <span className={style.span} onClick={navigateToSignIn}>Login</span></small>
        </div>
      </form>
      </section>
    </>
  );
};

export default SignUp;
