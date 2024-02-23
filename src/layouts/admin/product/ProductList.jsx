import React from "react";
import useAuth from "../../../features/auth/hooks/use-auth";
import { useState, useRef } from "react";
import Modal from "../../../components/Modal";
import Input from "../../../components/Input";
import * as adminApi from "../../../api/admin-api";
import Spinner from "../../../components/Spinner";
import { toast } from "react-toastify";

export default function ProductList() {
  const [edit, setEdit] = useState(false);
  const [item, setItem] = useState(null);
  const [input, setInput] = useState({ name: item?.name, price: item?.price });
  const [data, setData] = useState({});
  const [image, setImage] = useState(null);
  const { product, getProduct } = useAuth();

  const [loading, setLoading] = useState(false);
  const fileInputEl = useRef(null);

  const editProduct = (data) => {
    setData(data);
    setItem(data);
    setInput({ name: data?.name, price: data?.price });
  };

  const canCel = () => {
    setInput({ name: "", price: "" });
    setImage(null);
  };

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submitEdit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      input.id = data.id;
      if (input.name && input.price) {
        await adminApi.updateProduct(input);
      } else if (input.name) {
        await adminApi.updateProduct({ name: input.name, id: input.id });
      } else if (input.price) {
        await adminApi.updateProduct({ price: input.price, id: input.id });
      }

      const formData = new FormData();

      if (image) {
        formData.append("image", image);
        formData.append("id", data.id);
        await adminApi.updateImage(formData);
      }
      await getProduct();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id) => {
    try {
      setLoading(true);
      await adminApi.deleteProduct(id);
      toast.success("delete successfully");
      await getProduct();
    } catch (err) {
      console.log(first);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Spinner />}

      {edit && (
        <Modal
          onClose={() => {
            setEdit(false);
            canCel();
          }}
        >
          <form onSubmit={submitEdit}>
            <input
              type="file"
              className="hidden"
              ref={fileInputEl}
              onChange={(e) => {
                if (e.target.files[0]) setImage(e.target.files[0]);
              }}
            />
            <div className="w-40">
              <img
                role="button"
                src={
                  image ? URL.createObjectURL(image) : item?.image?.[0]?.image
                }
                className="bg-white"
                onClick={(e) => fileInputEl.current.click()}
              />
            </div>
            <label>Product name</label>
            <Input
              placeholder={item.name}
              value={input.name}
              name="name"
              onChange={handleChange}
            />
            <label>Price</label>
            <Input
              placeholder={item.price}
              value={input.price}
              name="price"
              type="number"
              onChange={handleChange}
            />
            <div className="flex gap-4 p-2">
              <button className="bg-blue-500 px-2 py-1.5 rounded-md text-white hover:bg-blue-600  ">
                Save
              </button>
              <button
                className="bg-gray-300 px-2 py-1.5 rounded-md hover:bg-red-500 hover:text-white"
                type="button"
                onClick={canCel}
              >
                Cancel
              </button>
            </div>
          </form>
        </Modal>
      )}

      <div className="flex flex-wrap gap-4">
        {loading && <Spinner />}
        {product?.map((el) => {
          const handleEdit = () => {
            editProduct(el);
          };

          return (
            <div key={el.id} className="bg-gray-200 rounded-lg p-3 mx-auto">
              <div>
                <h1 className="font-bold">PRODUCT ID : {el.id}</h1>
              </div>
              <div className="flex gap-3">
                <div className="w-40">
                  <img src={el.image?.[0]?.image} className="bg-white" />
                </div>
                <div className="border-2 border-gray-300 px-1.5 py-2 rounded-md font-semibold text-sm">
                  <p>Name : {el.name}</p>
                  <p>Price : {el.price}</p>
                  <p>Color : {el.color}</p>
                  <p>Brand : {el.brand.name}</p>
                  <p>Type : {el.type.type}</p>
                </div>
              </div>
              <div className="flex gap-4 justify-end py-1">
                <button
                  className="px-2 bg-blue-500 text-white rounded-md py-1.5 hover:bg-blue-600"
                  onClick={() => {
                    setEdit(true);
                    handleEdit();
                  }}
                >
                  edit
                </button>
                <button
                  onClick={() => deleteProduct(el.id)}
                  className="bg-gray-300 px-2 rounded-md py-1.5 hover:bg-red-500 hover:text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
