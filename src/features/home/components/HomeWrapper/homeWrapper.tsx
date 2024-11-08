import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const HomeWrapper = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home");
  }, [navigate]);

  return <></>;
};
