import React from "react";
const tag = [
  "Apple",
  "Samsung",
  "Camera",
  "Gaming",
  "Headphone",
  "Smarthpone",
  "Smartwatch",
  "Speaker",
];

export default function Footer() {
  return (
    <footer className="bg-gray-700 p-8">
      <div className="grid grid-cols-3">
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="text-white font-semibold">ABOUT US</h1>
          </div>
          <hr className="w-12" />
          <div>
            <p className="text-white font-sx">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
              mollitia neque at soluta error autem fugit deleniti minus deserunt
              esse recusandae voluptate labore, reprehenderit tenetur corporis
              non illum atque eum?
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="text-white font-semibold">TAGS</h1>
          </div>
          <hr className="w-12"/>
          <div className="flex flex-wrap gap-1.5">
            {tag.map((el) => (
              <div key={el} className="text-white bg-red-500 px-1 py-1 rounded-lg hover:bg-orange-200 hover:text-black" role="button">{el}</div>
            ))}
          </div>
        </div>
        <div>SIGNUP FOR NEWSLETTER</div>
      </div>
    </footer>
  );
}
