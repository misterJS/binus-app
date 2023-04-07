import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleLoginSsoThunk, handleLoginThunk } from "../../../store/client";

export const useLoginSetup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state: any) => state.client.auth);
  const user = JSON.parse(localStorage.getItem('userData') as any);

  useEffect(() => {
    if (user?.roleID === "2") {
      navigate("/");
    } else if (user?.roleID === "1") {
      navigate("/admin")
    } else {
      navigate("/login")
    }
  }, [user, auth]);

  const handleLogin = (data: any) => {
    dispatch(handleLoginThunk(data));
  };

  const handleLoginSso = (data: any) => {
    dispatch(handleLoginSsoThunk());
  };

  return {
    handleLogin,
    handleLoginSso,
  };
};
