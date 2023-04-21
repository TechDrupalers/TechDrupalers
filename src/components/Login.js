import './Login.css';

const Login = () => {
    return (
        <div className="main-login">
        <div className="sub-main-login">
        <div>
          <div className="form-login">
            <h1>Login</h1>
            <div>
              <label>Username</label>
            </div>
            <div className="login-input-text">
              <input type="textfield" className="username" id="username"></input>
            </div>
            <div>
              <label>Password</label>
            </div>
            <div className="login-input-password">
              <input type="password" className="password" id="password"></input>
            </div>
            <button>Login</button>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Login;