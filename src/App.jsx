import React from "react";
import Router from "./routes";
import { ToastContainer, Slide } from "react-toastify";
import useAuth from "./features/auth/hooks/use-auth";
import Loader from './components/Loader'

function App() {
  const {initialLoad} = useAuth()
  

  if(initialLoad) return <Loader/>
  return (
    <>
      <Router />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="colored"
        transition={Slide}
      />
    </>
  );
}

export default App;
