import React from "react";
import LoginForm from "../../components/Authentication/LoginForm";
import RegisterForm from "../../components/Authentication/RegisterForm";

const Authentication = ({ loginState, className, ...props }) => {
  return (
    <main className="bg-main flex-grow w-full justify-center items-center py-6">
      {loginState === "login" ? <LoginForm /> : <RegisterForm />}
    </main>
  );
};

export default Authentication;
