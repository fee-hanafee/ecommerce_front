import React from "react";
import mainpic from "../../assets/main-slide.jpg";
import watch from "../../assets/pic-apple-watch.jpg";
import smartphone from "../../assets/pic-iphone12.jpg";
import headphone from "../../assets/pic-headphone.jpg";
import UnderMain from "./component/UnderMain";

import FeatureProduct from "./FeatureProduct";
import { Link } from "react-router-dom";

export default function Container() {
  const image = new Image();
 const srcImg = "data:image/png;base64,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"
  return (
    <div>
      <div className="w-full relative">
        <div className="absolute z-10 border inset-0  ">
          <div className="flex justify-center items-center h-[100%]">
            <div className="flex flex-col items-center w-96">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-red-500   to-indigo-400 inline-block text-transparent bg-clip-text">
                FLASH SALE
              </h1>
              <Link to="/shop">
                <div className=" border-2 border-red-500 rounded-full px-2 py-1.5 m-2 font-bold hover:bg-red-500 hover:text-white transition-all">
                  VIEW ALL
                </div>
              </Link>
            </div>
          </div>
        </div>
        <img src={mainpic} className="w-full" />
      </div>
      <div className="flex flex-row    bg-gray-200 items-center  justify-center ">
        <UnderMain img={smartphone} />
        <UnderMain img={watch} />
        <UnderMain img={headphone} />
      </div>
      <div className="h-96 bg-white">
        <div className="flex flex-col justify-center items-center gap-8 mt-20">
          <div className="">
            <h1 className="text-4xl font-bold text-gray-600">Welcome to</h1>
          </div>
          <div className="">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-red-700 via-red-500   to-indigo-400 inline-block text-transparent bg-clip-text">
              WEBSMART GADGETS
            </h1>
          </div>
          <div className="w-[75%] text-center font-semibold">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis aliquid cupiditate id ipsa, eaque voluptate laudantium
              dolores? Id aperiam vitae minus. Quam inventore expedita
              blanditiis ducimus ipsam error, maiores est!
            </p>
          </div>
        </div>
        <div>
          <img src={srcImg} />
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAACkCAYAAAAZtYVBAAAAAklEQVR4AewaftIAAAWPSURBVO3BQY4kRxIEQbVA/f/LunMj/BJAIqubPlwTiX9QtcShapFD1SKHqkUOVYscqhY5VC1yqFrkULXIoWqRQ9Uih6pFDlWLHKoWOVQtcqha5MNbCb9KGRIGZUgYlCFhUB5JeEUZEgblKmFQhoRfpbxxqFrkULXIoWqRD9+mfFXClfJIwlcpQ8KgXCX8KuWrEr7pULXIoWqRQ9UiH35awiPKKwmDcpUwJAzKkHClXCUMyiMJg/JKwiPKTzpULXKoWuRQtciHv13CVcKgXClDwpUyJFwpQ0L941C1yKFqkUPVIh/+a5QhYUgYlCHhSnkl4Up5JGFQ/maHqkUOVYscqhb58NOUX5UwKFcJV8pVwivKIwmD8oqyyaFqkUPVIoeqRT58W8K/ShkSBuVKGRIG5UoZEgZlSBiUIWFQhoRBuUrY7FC1yKFqkUPVIvEP/mYJg3KVMChDwqAMCY8ojyRcKf9lh6pFDlWLHKoW+fBWwqA8kjAoQ8IjCVfKkDAoQ8KgXCVcJQzKoLyS8FXKVcKgvHGoWuRQtcihapEPbylXCYNylTAojyQ8ogwJryi/KmFQrhKulCHhNx2qFjlULXKoWuTDWwlXyiPKkHClDMqQMCQMyqA8knClPJJwpQzKkDAoV8oryjcdqhY5VC1yqFrkw7cpVwmDMiQMypAwJFwpryS8kvCIMiQMCYMyKK8kDMpvOlQtcqha5FC1yIdvS7hShoRBGRKulKuEK2VIeES5SrhKGJQrZUh4RLlSrhIG5ZsOVYscqhY5VC3y4S1lSHhEuVKGhF+lXCUMyqAMCYNypVwpQ8KvShiUNw5VixyqFjlULfJhu4QflTAoQ8Kg/KiER5RBuUq4Uq6Un3SoWuRQtcihapEPbyUMylXCI8qQcJUwKFcJryhDwqBcJdQ/DlWLHKoWOVQt8uG3KVcJQ8KgfJUyJAzKkDAog3KlDAlXypBwlTAoV8qQMChDwpXyxqFqkUPVIoeqRT68pQwJV8qQMCiPJLyScJUwKFcJgzIkvKIMCVcJryRcKd90qFrkULXIoWqRDz9NGRIGZUi4UgblFWVIGJSrhEEZEgZlSBiUq4RBuUp4RRkShoRBeeNQtcihapFD1SIfflrCK8orCYMyJAzKVcKgXClDwlXClXKV8EjCI8pPOlQtcqha5FC1SPyDNxIG5SrhVymPJAzKkHCl/KiEQXkkYVCuEh5R3jhULXKoWuRQtciHn5YwKEPClTIkXClDwqC8ojyS8FXKkHClXCUMyqAMCT/pULXIoWqRQ9Ui8Q9+UsKgDAmvKL8qYVCGhCtlSBiUIeFK+aqEQflNh6pFDlWLHKoW+bCNcpUwJFwpVwmD8kjCoAwJV8qQ8ErCoAwJV8pVwqB806FqkUPVIoeqReIfvJFwpbyScKW8knClXCUMypDwiDIkDMqQ8KOUq4RBeeNQtcihapFD1SIf3lJ+lHKV8FXKVcIjyiMJryiPJAzKVcJPOlQtcqha5FC1yIe3En6V8ojySMIjypAwKF+V8EjCoFwlPKJ806FqkUPVIoeqRT58m/JVCVfKkPCKMiQMypBwlTAoryhDwpXyivKbDlWLHKoWOVQt8uGnJTyiPJIwKFcJg/KKcpVwlTAoryT8qIRB+aZD1SKHqkUOVYt8+NspVwmD8ohylTAogzIkDMq/SrlKuEoYlDcOVYscqhY5VC3y4f9dwiPKVcIrCY8ojyQMCYMyKL/pULXIoWqRQ9UiH36a8p+mXCVcJXxVwpUyJAwJjyjfdKha5FC1yKFqkfgHbyT8KmVIGJRHEq6UIWFQXkm4UoaEr1KuEh5R3jhULXKoWuRQtUj8g6olDlWLHKoWOVQtcqha5FC1yKFqkUPVIoeqRQ5VixyqFjlULXKoWuRQtcihapFD1SL/AzANAWTigDdnAAAAAElFTkSuQmCC" />
        </div>
      </div>
      <FeatureProduct />
      <div className="h-96">
        <div className="">
          <h1>ON SALE</h1>
        </div>
      </div>
    </div>
  );
}
