import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useTitle from "../../hooks/useTitle";
const SignUp = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    useTitle("Sign Up");
    const { createUser, signInWithGoogle } = useContext(AuthContext);

    const handleSignUp = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const photo = form.photo.value;
      const email = form.email.value;
      const password = form.password.value;
      console.log(name, photo, email, password);
      if (!/(?=.*[a-z]).{8,}/.test(password)) {
        setError(
          "Must contain at least one number and lowercase letter, and at least 8 or more characters"
        );
        return;
      }
      createUser(email, password)
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);
          setError("");
          form.reset();
          setSuccess("Account created successfully!");
        })
        .catch((error) => {
          console.log(error);
          setError(error.message);
        });
    };

    const handleGoogleSignIn = () => {
      signInWithGoogle()
        .then((result) => {
          console.log(result.user);
        })
        .catch((error) => console.log(error));
    };
  return (
    <div className="hero min-h-fit bg-base-200 mb-2">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">MixxStore</h1>
          <h1 className="text-xl font-bold">Please Sign Up here !</h1>
          <p className="py-6 w-60">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  required
                  placeholder="Enter your photo URL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-secondary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              <p className="text-danger">{error}</p>
              <p className="text-success">{success}</p>
              <br />
            </form>
            <div className="divider">OR</div>
            <div className="text-center">
              <button onClick={handleGoogleSignIn} className="btn btn-block">
               Signup with Google
              </button>
            </div>
            <p className="text-center">
              Already have an account ?{" "}
              <Link className="text-secondary font-bold" to="/login">
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
