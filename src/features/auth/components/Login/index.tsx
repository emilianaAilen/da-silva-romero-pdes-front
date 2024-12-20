import { LoginForm } from "../../types";
import { Login as LoginUI } from "./login";
import { SubmitHandler } from "react-hook-form";
import { loginUser } from "../../services/auth";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [cookies] = useCookies(["authToken"]);
  const navigate = useNavigate();
  const dispath = useDispatch();

  useEffect(() => {
    if (cookies.authToken) {
      navigate("/home"); 
    }
  }, [cookies.authToken, navigate]);

  const onSubmit: SubmitHandler<LoginForm> = (data) => loginUser(data, dispath);

  return <LoginUI onSubmit={onSubmit} />;
};
