import React from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useState, useRef } from "react";
import validateInput from "../../../features/validation.js/validate-inputproduct";
import * as adminApi from "../../../api/admin-api";
import { toast } from "react-toastify";
import Spinner from "../../../components/Spinner";
import useAuth from "../../../features/auth/hooks/use-auth";

const initial = {
  name: "",
  price: "",
  color: "",
  brandId: "1",
  typeId: "1",
};

export default function AddProduct() {
  const [input, setInput] = useState(initial);
  const [error, setError] = useState({});
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputEl = useRef(null);

  const {getProduct} =useAuth()

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const formData = new FormData();
      const valid = {
        name: input.name,
        price: input.price,
        color: input.color,
      };
      const validateError = validateInput(valid);
      console.log(validateError);
      if (validateError) return setError(validateError);

      const respon = await adminApi.createProduct(input);

      if (image) {
        formData.append("image", image);
        formData.append("productId", respon.data.product.id);
      }
      await adminApi.createImage(formData);
      toast.success("create successfully");
      setInput({ name: "", price: "", color: "", brandId: "1", typeId: "1" });
      setImage(null);
      await getProduct()
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <div>
        <form
          onSubmit={handleSubmit}
          className="w-96 flex flex-col gap-2 border p-4 rounded-md bg-gray-100 mx-auto"
        >
          <div>
            <h6 className="font-bold text-xs text-red-500">ADD NEW PRODUCT</h6>
          </div>
          <input
            type="file"
            className="hidden"
            ref={fileInputEl}
            onChange={(e) => {
              if (e.target.files[0]) setImage(e.target.files[0]);
            }}
          />
          <div
            className="w-40 h-40 bg-gray-200 mx-auto"
            role="button"
            onClick={(e) => fileInputEl.current.click()}
          >
            <img
              src={image ? URL.createObjectURL(image) : null}
              className=" w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Input
              placeholder="Product Name"
              value={input.name}
              name="name"
              onChange={handleChange}
              errorMessage={error.name}
            />
            <Input
              placeholder="Price"
              value={input.price}
              name="price"
              onChange={handleChange}
              errorMessage={error.price}
            />
            <Input
              placeholder="Color"
              value={input.color}
              name="color"
              onChange={handleChange}
              errorMessage={error.color}
            />
            <select
              name="brandId"
              value={input.brandId}
              onChange={handleChange}
            >
              <option disabled>Select one</option>
              <option value="1">Apple</option>
              <option value="2">Samsung</option>
              <option value="3">Huawei</option>
              <option value="4">Xiaomi</option>
              <option value="5">Vivo</option>
              <option value="6">Oppo</option>
              <option value="7">Nokia</option>
              <option value="8">Sony</option>
              <option value="9">Dyson</option>
              <option value="10">Asus</option>
              <option value="11">Acer</option>
              <option value="12">Dell</option>
            </select>
            <select name="typeId" value={input.typeId} onChange={handleChange}>
              <option disabled>Select one</option>
              <option value="1">SmartPhone</option>
              <option value="2">SmartWatch</option>
              <option value="3">HeadPhone</option>
              <option value="4">Tablet</option>
              <option value="5">Other</option>
            </select>
          </div>
          <div className="flex gap-2">
            <Button>Submit</Button>
            <Button bg="bg-gray-300 hover:bg-red-500" type="button">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
