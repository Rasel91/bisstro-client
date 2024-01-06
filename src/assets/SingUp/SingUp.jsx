import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { LoadCanvasTemplate, loadCaptchaEnginge } from 'react-simple-captcha';
import singinImg from '../../../src/assets/others/authentication2.png';
const SingUp = () => {

      useEffect(()=>{
            loadCaptchaEnginge(6); 
      },[]);

      const {
            register,
            handleSubmit,
            watch,
            formState: { errors },
          } = useForm();

          const onSubmit = (data) => console.log(data)

          console.log(watch("example")) // watch input value by passing the name of it
         
      return (
            <div>
                  <Helmet>
                        <title>Bistro | SignUp</title>
                  </Helmet>
                  <div className="hero min-h-screen bg-base-200 ">
                        <div className="hero-content flex-col lg:flex-row-reverse ">

                              <div className="card w-1/2 shrink-0  max-w-sm shadow-2xl py-10 bg-base-100">
                                    <h1 className="text-center text-3xl">SignUp</h1>
                                    <form onSubmit={handleSubmit(onSubmit)}  className="card-body">
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Name</span>
                                                </label>
                                                <input type="name"  {...register("name")} name="name" placeholder="name" className="input input-bordered" required />
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Email</span>
                                                </label>
                                                <input type="email" {...register("email")} name="email" placeholder="email" className="input input-bordered" required />
                                          </div>

                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Password</span>
                                                </label>
                                                <input type="password" {...register("password")}  name="password" placeholder="password" className="input input-bordered" required />
                                                <label className="label">
                                                      <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                                </label>
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                <LoadCanvasTemplate />
                                                </label>
                                                
                                                <input type="text" {...register("captcha", { required: true })}  name="captcha" 
                                                placeholder="captcha" className="input input-bordered" required />

                                                {errors.captcha && <span>This field is required</span>}
                                          </div>
                                          <div className="form-control mt-6">
                                                <input className="btn btn-primary" type="submit" value='SingUp' />

                                          </div>
                                          <div className="form-control mt-6">
                                                <Link to='/login'><p> You have an Account? Please <span className="text-blue-700">Log In</span></p></Link>

                                          </div>
                                    </form>
                              </div>
                              <div className="text-center w-1/2 rounded-lg lg:text-left">
                                    <img src={singinImg} alt="#" />
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default SingUp;