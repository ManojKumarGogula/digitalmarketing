import React from "react";
import instIcon from "../../asserts/icons/instagram.svg";
import flipkartIcon from "../../asserts/icons/flipkart.svg";
import twitterIcon from "../../asserts/icons/twitter.svg";

const Footer = () => {
  const keys = [
    "Home page",
    "About us",
    "Book  audit",
    "Contact us",
    "Our services",
    "Blogs",
  ];
  const icons = [instIcon, flipkartIcon, twitterIcon];
  return (
    <div className="flex flex-col items-center  p-[2vh] ">
      <div className="flex flex-col md:flex-row xl:flex-row xl:items-center w-[90vw] mx-auto text-12">
        <div className="text-[2.2rem]">Logo</div>
        <div className="grid  grid-cols-2 md:grid-cols-3 xl:grid-cols-6 text-start  w-[80vw] md:w-[50vw] xl:w-9/12 my-8 mx-auto ">
          {keys.map((item, index) => {
            return (
              <div key={index} className=" md:mx-auto xl:mx-auto text-12 xl:text-14 ">
                {item}
              </div>
            );
          })}
        </div>
        <div className="flex flex-row w-[50vw] md:w-[10vw] xl:w-[10vw]  mx-auto md:mr-0  xl:mr-0 xl:ml-auto">
          {icons.map((item, index) => {
            return (
              <div key={index} className="mx-auto">
                <img src={item} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="mx-auto my-8">Copyright@2023</div>
    </div>
  );
};

export default Footer;
