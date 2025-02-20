import React from "react";
import "./admin.css";
import Link from "next/link";

const page = () => {
  return (
    <div className="container">
      <h1>Admin Panel</h1>
      <div className="subContainer">
        <span className="user">
          <h3>User</h3>
          <ul>
            <Link href={`/adminPage/register`}>
              <li>Register</li>
            </Link>
            <Link href={`/adminPage/login`}>
              <li>Login</li>
            </Link>
          </ul>
        </span>
      </div>
    </div>
  );
};

export default page;
