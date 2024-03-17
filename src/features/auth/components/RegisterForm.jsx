import { useState } from "react";

import Modal from "../../../components/Modal";
import Input from "../../../components/Input";
import useAuth from "../hooks/use-auth";

import validateRegister from "../../validation.js/validate-register";
import { toast } from "react-toastify";

const initial = {
  emailOrMobile: "",
  password: "",
  confirmPassword: "",
};

export default function RegisterForm({ onClose }) {
  const [input, setInput] = useState(initial);
  const [error, setError] = useState({});
  const { register } = useAuth();

 
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const validateErr = validateRegister(input);

      if (validateErr) return setError(validateErr);
      await register(input);
      onClose();
      toast.success("register successfully");
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <Modal title="Sign up" onClose={onClose} width={40}>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 w-[70%] mx-auto">
          <Input
            placeholder="emailOrMobile"
            onChange={handleChange}
            name="emailOrMobile"
            value={input.emailOrMobile}
            errorMessage={error.emailOrMobile}
          />

          <Input
            placeholder="password"
            type="password"
            onChange={handleChange}
            name="password"
            value={input.password}
            errorMessage={error.password}
          />
          <Input
            placeholder="confirmPassword"
            type="password"
            onChange={handleChange}
            name="confirmPassword"
            value={input.confirmPassword}
            errorMessage={error.confirmPassword}
          />
          <button className="btn hover:bg-blue-500 hover:text-white">
            sign up
          </button>
        </div>
      </form>
    </Modal>
  );
}
