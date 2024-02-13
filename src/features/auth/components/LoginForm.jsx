import Modal from "../../../components/Modal";
import Input from "../../../components/Input";
import { useState } from "react";
import useAuth from "../hooks/use-auth";
import { toast } from "react-toastify";
import validateLogin from "../../validation.js/validate-login";

const initial = {
  emailOrMobile: "",
  password: "",
};

export default function LoginForm({ onClose }) {
  const [input, setInput] = useState(initial);
  const [error, setError] = useState({});
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const validateError = validateLogin(input);

      if (validateError) return setError(validateError);

      await login(input);
      onClose();
      toast.success("login successfully");
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    }
  };

  const handelChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: "" });
  };
  return (
    <Modal title="login" onClose={onClose} width={40}>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 w-[70%] mx-auto">
          <Input
            placeholder="emailOrMobile"
            value={input.emailOrMobile}
            onChange={handelChangeInput}
            name="emailOrMobile"
            errorMessage={error.emailOrMobile}
          />

          <Input
            placeholder="password"
            value={input.password}
            onChange={handelChangeInput}
            name="password"
            errorMessage={error.password}
            type="password"
          />

          <button className="btn hover:bg-blue-500 hover:text-white">
            Login
          </button>
        </div>
      </form>
    </Modal>
  );
}
