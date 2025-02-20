// "use client";
// import { useState } from "react";
// import "./LoginPage.css"; // Import the CSS file
// import Link from "next/link";
// import { useLoginMutation } from "../../../../redux/api/userApiSlice";
// import { toast } from "react-toastify";

// const LoginPage = () => {
//   // const [login, isLoading] = useLoginMutation();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       // const res = await login({ email, password }).unwrap();
//       toast.success("user login successfull")
//       console.log(res);
//     } catch (error) {
//       toast.error(error?.data?.message || error.error);
//     }
//     console.log("Email:", email, "Password:", password);
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2>Login</h2>

//         <form onSubmit={handleLogin}>
//           <div className="input-group">
//             <label>Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <label>Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <button type="submit" className="login-btn">
//             Login
//           </button>
//         </form>

//         <p className="register-text">
//           Don&apos;t have an account?{" "}
//           <Link href="/adminPage/register">Sign up</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


"use client"
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./LoginPage.css"; // Import the CSS file

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email,
      password);
      // toast.success("Login Successful! 🎉");
  
      // toast.error("Invalid email or password! ❌");
  
  };

  return (
    <div className="login-container">
      <ToastContainer position="top-center" autoClose={2000} />
      
      <div className="login-box">
        <h2>Login</h2>
        
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>

        <p className="register-text">
          Don&apos;t have an account? <a href="#">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

