import React, { useContext, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import useTitle from "../hooks/useTitle";
import Loading from "../comps/Loading";
import toast, { Toaster } from "react-hot-toast";

const LogIn = () => {
  const {
    user,
    logIn,
    logOut,
    googleLogIn,
    gitHubLogIn,
    isLoading,
    setLoading,
    setRole,
    setUserVerified
  } = useContext(AuthContext);
  const [error, setError] = useState("");

  useTitle("Log In");

  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const notify = (user, error) => {
    if (user) {
      return toast.success("User Log In Successful.");
    } else {
      return toast.error("User Log In Failed. " + error.message);
    }
  };

  const handleLogIn = (event) => {
    //setLoading(true);
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    //console.log(email, password, role);

    logIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        fetch(`http://localhost:5000/users?email=${email}`)
          .then((res) => res.json())
          .then((data) => {
            //console.log(data)
            notify(user, null);
            setRole(data.role);
            setUserVerified(data.verified)
          })
          .catch((error) => {
            if (error) {
              logOut()
                .then()
                .then()
                .catch((error) => console.error(error.message));
              return toast.error(
                "User can not be found in database. Please register and try again."
              );
            }
          });

        // const currentUser = {
        //   email: user.email,
        // };

        // get jwt token
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
        // // navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        notify(null, error);
        setError(errorMessage);
      });
  };

  const handleGoogleLogIn = () => {
    setLoading(true);
    googleLogIn()
      .then((userCredential) => {
        const user = userCredential.user;
        const currentUser = {
          name: user?.displayName || undefined,
          email: user.email,
          role: "buyer",
        };

        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              notify(user, null);
              setRole("buyer");
            }
          })
          .catch((error) => {
            notify(null, error);
          });

        //console.log(currentUser);
        // get jwt token
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
        // // navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handleGitHubLogIn = () => {
    setLoading(true);
    gitHubLogIn()
      .then((userCredential) => {
        const user = userCredential.user;
        const currentUser = {
          name: user?.displayName || undefined,
          email: user.email,
          role: "buyer",
        };

        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              notify(user, null);
              setRole("buyer");
            }
          })
          .catch((error) => {
            notify(null, error);
          });

        // get jwt token
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
        // // navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (user) {
        navigate(from, { replace: true });
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [user, navigate, from]);

  return (
    <div className="w-11/12 h-auto md:w-1/2 mx-auto border rounded-md shadow-lg hover:shadow-2xl p-5 my-8">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      {isLoading && <Loading></Loading>}
      <h1 className="text-4xl font-bold text-center my-8">Log In</h1>
      <p>
        Haven't Registered yet?{" "}
        <Link to="/register" className="underline footer-link">
          Go to Register
        </Link>
      </p>
      <form onSubmit={handleLogIn} className="form-control">
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

        <label className="label cursor-pointer">
          <span className="label-text">Admin</span>
          <input
            type="radio"
            name="role"
            className="radio checked:bg-green-500"
            value="admin"
          />
        </label>
        <label className="label cursor-pointer">
          <span className="label-text">Buyer</span>
          <input
            type="radio"
            name="role"
            className="radio checked:bg-red-500"
            value="buyer"
            defaultChecked
          />
        </label>

        <label className="label cursor-pointer">
          <span className="label-text">Seller</span>
          <input
            type="radio"
            name="role"
            className="radio checked:bg-blue-500"
            value="seller"
          />
        </label>

        {error && <p className="text-error">{error}</p>}
        <button type="submit" className="btn btn-outline btn-info my-4">
          Log In
        </button>
      </form>
      <p className="text-center text-info font-bold">
        <span className="text-warning">Important!</span> Users logged in by
        using Google or Git Hub will be considered as buyers.
      </p>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <button
          onClick={handleGoogleLogIn}
          type="submit"
          className="w-full md:w-5/12 btn btn-outline btn-primary my-4"
        >
          Google Log In <FcGoogle className="mx-2" />
        </button>
        <button
          onClick={handleGitHubLogIn}
          type="submit"
          className="w-full md:w-5/12 btn btn-outline my-4"
        >
          Git Hub Log In <FaGithub className="mx-2" />
        </button>
      </div>
    </div>
  );
};

export default LogIn;
