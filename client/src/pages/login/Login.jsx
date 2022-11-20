import { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import './login.scss';

import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';

// loading animation component
export function CircularColor() {
  return (
    <Stack sx={{ color: 'white' }} spacing={2} direction="row">
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
    </Stack>
  );
}

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  console.log(user);

  return (
    <div className="login">
      <h1>OurApp</h1>
      <div className="card">
        <h2>Sign in</h2>
        <p>Hi, Welcome to OurApp</p>
        <form onSubmit={handleClick}>
          <input type="email" placeholder="Email" required ref={email} />
          <input
            type="password"
            placeholder="Password"
            required
            ref={password}
          />
          <button disabled={isFetching}>
            {isFetching ? (
              <CircularProgress color="inherit" size="20px" />
            ) : (
              'Sign in'
            )}
          </button>
        </form>
        {/* <div className="sign-in">
          <span>or</span>
          <button>Sign in with Google</button>
        </div> */}
        <div className="sign-up">
          <span>New to OurApp?</span>
          <Link to="/register">
            <button>Create account</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
