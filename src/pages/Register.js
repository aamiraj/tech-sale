import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";
import useTitle from "../hooks/useTitle";
import Loading from "../comps/Loading";

const Register = () => {
  const { register, isLoading, setLoading } = useContext(AuthContext);
  useTitle("Register");

  const handleRegister = (event) => {
    //setLoading(true);
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    register(email, password)
      .then((userCredential) => {
        // const user = userCredential.user;

        // const currentUser = {
        //   email: user.email,
        // };

        // // get jwt token
        // fetch("https://shipy-server-app.vercel.app/jwt", {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(currentUser),
        // })
        //   .then((res) => {
        //     setLoading(false);
        //     return res.json();
        //   })
        //   .then((data) => {
        //     //console.log(data);
        //     // saved to local storage
        //     localStorage.setItem("access-token", data.token);
        //     //navigate(from, { replace: true });
        //   });
        // alert(`Welcome ${user.email}`);
        // setLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
    form.reset();
  };

  return (
    <div className="w-3/4 md:w-1/2 mx-auto border rounded-md shadow-lg hover:shadow-2xl p-5 my-8">
      {isLoading && (
        <Loading/>
      )}
      <h1 className="text-4xl font-bold text-center my-8">Register Here</h1>
      <p>
        Already Registered?{" "}
        <Link to="/login" className="underline footer-link">
          {" "}
          Go to Log In
        </Link>
      </p>
      <form onSubmit={handleRegister} className="form-control">
        <label htmlFor="fullName" className="input-group my-4">
          Full Name
        </label>
        <input name="fullName" type="text" className="input input-bordered" />
        <label htmlFor="email" className="input-group my-4">
          Email
        </label>
        <input
          name="email"
          type="email"
          className="input input-bordered"
          required
        />
        <label htmlFor="password" className="input-group my-4">
          Password
        </label>
        <input
          name="password"
          type="password"
          className="input input-bordered"
          required
        />
        {/* <label htmlFor="photoURL" className="input-group my-4">
          Photo URL
        </label>
        <input name="photoURL" type="text" className="input input-bordered" /> */}
        <button type="submit" className="btn btn-outline btn-info my-4">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;