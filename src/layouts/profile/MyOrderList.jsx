import React from "react";
import useProfile from "./context/ProfileContext";
import Spinner from "../../components/Spinner";

export default function MyOrderList() {
  const { myOrder, updateStatusShipping, loading } = useProfile();

  return (
    <>
      {loading && <Spinner />}
      {myOrder?.map((el) => {
        return (
          <div key={el.id} className="border bg-gray-200 p-2 rounded-md">
            <div>
              <h1 className="font-semibold">MY ORDER</h1>
              <div className="font-mono">
                <p>สถานะออเดอร์ : {el.shipping ? "รับแล้ว" : "ยังไม่ถึง"}</p>
                <p>สถานะการจ่ายเงิน : {el.payment ? "confirm" : "pending"}</p>
              </div>
            </div>
            <div>
              {el.orderItem?.map((item) => {
                return (
                  <div key={item.id} className="flex gap-2 font-mono">
                    <p>Product : {item.product.name}</p>
                    <p>Amount : {item.amount}</p>
                  </div>
                );
              })}
            </div>
            {!el.shipping && (
              <div className="">
                <p className="font-semibold text-sm pb-1">Sending</p>
                <button
                  className="bg-blue-500 text-white px-2 py-1.5 rounded-md hover:bg-blue-600"
                  onClick={() => updateStatusShipping(el.id)}
                >
                  ถ้าได้รับของแล้วกรุณาคลิก
                </button>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}
