import { useLocation } from "react-router-dom";

export const useSearch = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("search");

  return {
    query,
  };
};