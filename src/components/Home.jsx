import React from 'react';


const Home = () => {
  return (
    <>
    
<div className="hero min-h-screen relative">
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
        <source src="src/components/cars.mp4" type="video/mp4" /> 
      </video>
      <div className="hero-overlay bg-black bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-yellow-400">Grab Your Ride...</h1>
          <p className="mb-5 text-white">
            "Drive the thrill. Performance unleashed. Your ultimate sports car awaits at [Dealership Name]. Experience excellence on wheels!"
          </p>
          <button className="btn btn-wide">Book</button>
          <a href="#login">go to login</a>
        </div>
      </div>
    </div>
    <div className="hero bg-white  min-w-screen pt-20 pb-11 px-11">
  <div className="hero-content flex-col lg:flex-row-reverse gap-20">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-black">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>

    {/* Login  */}
    <div id='login' className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
  
</div>

  
  </>
  );
};

export default Home;
