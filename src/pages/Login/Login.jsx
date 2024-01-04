import { Helmet } from "react-helmet";
import login from '../../../src/assets/others/authentication2.png';

const Login = () => {
      const handleLogin = e => {
            e.preventDefault();
            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;
            const captcha = form.captcha.value;
            console.log(email, password, captcha)
      }
      return (
            <div>
                  <Helmet>
                        <title>Bistro | Login</title>
                  </Helmet>
                  <div className="hero min-h-screen bg-base-200 ">
                        <div className="hero-content flex-col lg:flex-row-reverse ">

                              <div className="card w-1/2 shrink-0  max-w-sm shadow-2xl py-10 bg-base-100">
                                    <h1 className="text-center text-3xl">Login</h1>
                                    <form onSubmit={handleLogin} className="card-body">
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Email</span>
                                                </label>
                                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                          </div>

                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Password</span>
                                                </label>
                                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                                <label className="label">
                                                      <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                                </label>
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Captcha</span>
                                                </label>
                                                <input type="text" name="captcha" placeholder="captcha" className="input input-bordered" required />
                                          </div>
                                          <div className="form-control mt-6">
                                                <input className="btn btn-primary" type="submit" value='Login' />

                                          </div>
                                    </form>
                              </div>
                              <div className="text-center w-1/2 rounded-lg lg:text-left">
                                    <img src={login} alt="#" />
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Login;