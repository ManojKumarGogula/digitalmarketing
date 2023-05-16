import React from "react";
import Header from "../../components/Header";
import manImage from "../../asserts/images/man.png";
import StarBucks from "../../asserts/images/starbucks.png";
import nike from "../../asserts/images/Nike.png";
import fIcon from "../../asserts/icons/f.svg";
import pinterstIcon from "../../asserts/icons/pintrest.svg";
import pwaIcon from "../../asserts/icons/pwa.svg";
import vIcon from "../../asserts/icons/v.svg";
import sassIcon from "../../asserts/icons/sass.svg";
import manIcon from "../../asserts/icons/man.svg";
const HomePage = () => {
  const imagesData = [
    {
      img: StarBucks,
      title: "STARBUCKS ",
      sub: "Our ad campaign brought 80% footfall to the company   ",
    },
    {
      img: nike,
      title: "Nike",
      sub: "Our ad campaign brought 80% footfall to the company   ",
    },
    {
      img: nike,
      title: "Nike",
      sub: "Our ad campaign brought 80% footfall to the company   ",
    },
    {
      img: StarBucks,
      title: "STARBUCKS ",
      sub: "Our ad campaign brought 80% footfall to the company   ",
    },
  ];

  const Icons = [
    {
      img: pinterstIcon,
      title: "Pinterest ",
    },
    {
      img: fIcon,
      title: "Pinterest ",
    },
    {
      img: pwaIcon,
      title: "PWA ",
    },
    {
      img: vIcon,
      title: "Saas ",
    },
    {
      img: sassIcon,
      title: "Pinterest ",
    },
    {
      img: pinterstIcon,
      title: "Pinterest ",
    },
    {
      img: fIcon,
      title: "Pinterest ",
    },
    {
      img: pwaIcon,
      title: "PWA ",
    },
    {
      img: vIcon,
      title: "Saas ",
    },
    {
      img: sassIcon,
      title: "Pinterest ",
    },
  ];
  return (
    <div className="w-[100%]">
      <Header />
      <div className="w-[100%] h-[90vh] mt-[10vh]">
        <img src={manImage} className=" w-full h-full object-fill" />
        <div className="absolute w-[100vw] md:w-[60vw] top-[15vh] md:top-[40vh] xl:top-[40vh]  text-24 xl:text-40 bg-imgtrans text-bluebg font-700 opacity-60  p-[2vw] md:p-[6vh] xl:p-[6vh]">
          <div className="flex flex-row md:flex-col xl:flex-col justify-center">
            <div>We are&nbsp;</div>
            <div className="text-redText">Extensive</div>
          </div>
          <div className="text-8 md:text-20 xl:text-20 xl:w-[30vw] ">
            Helping you stand out in a crowded market
          </div>
        </div>
        <div className="bg-imgtrans text-bluebg py-[20vh] ">
          <div className="flex flex-col mx-auto w-[90%] font-400">
            <div>WHO WE ARE</div>
            <div className="font-900 text-24 md:text-40 xl:text-60 my-10">
              We are Extensive.
            </div>
            <div className="w-5/6 text-16 text-justify my-10">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </div>
            <div className="bg-bluebg p-[1vw] relative w-[80%] md:w-[25vw] xl:w-[20vw] text-imgtrans text-center rounded-8 my-10 hover:bg-imgtrans hover:text-blackText">
              BOOK A FREE MARKETING AUDIT
            </div>
          </div>
          <div className="flex flex-col md:flex-row xl:flex-row  justify-around my-20">
            <div className="bg-roundedboxbg p-[3vw] rounded-tl-[10vw] ">
              <div className="font-700 text-40">
                WHAT
                <div>WE DO.</div>
              </div>
              <div className="w-full xl:w-3/6">
                We do lots of stuffs , basically adding value to your product .
              </div>
            </div>
            <div className="text-20 md:text-24 xl:text-36">
              <div>Digital Marketing </div>
              <div>Digital Marketing </div>

              <div>Digital Marketing </div>

              <div>Digital Marketing </div>
            </div>
          </div>
          <div className="bg-bluebg">
            <div className="w-5/6 mx-auto">
              <div className="text-28 text-imgtrans font-700 font-serif my-20">
                Our <div>Work.</div>
              </div>
              <div className="flex flex-row flex-wrap">
                {imagesData.map((item, index) => {
                  return (
                    <div key={index} className=" w-full md:w-[30vw] xl:w-[35vw] m-20 text-imgtrans">
                      <img src={item.img} className="w-full object-cover" />
                      <div className="text-redText text-12">
                        DIGITAL MARKETING
                      </div>
                      <div className="text-24">{item.title}</div>
                      <div className="text-14">{item.sub}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="bg-imgtrans">
            <div className="w-5/6 mx-auto">
              <div className="text-24 xl:text-40 text-bluebg font-500">
                <div>Our</div> <div>Partners.</div>
              </div>
              <div className="text-redText text-14">
                Your success is our success.
              </div>
              <div className="grid grid-cols-5 items-center my-[2vw]">
                {Icons.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex w-[8vw] flex-col items-center mx-auto my-20 text-8 xl:text-20"
                    >
                      <img src={item.img} />
                      <div>{item.title}</div>
                    </div>
                  );
                })}
              </div>
              <div className="text-bluebg font-700 text-20 md:text-56">
                Testimonials
              </div>
              <div className="w-[80vw] border-border border-1 rounded-8 flex flex-row items-center my-[2vh]">
                <img src={manIcon} className=" w-[20vw] xL:w-[10vw] ml-[2vw]" />
                <div className="flex flex-col">
                  <span className="font-400 text-12 md:text-40 xl:text-40">
                    “Working with Extensive is great”
                  </span>
                  <div className="flex flex-row items-center">
                    <div className="h-2 w-[10vw] bg-bluebg ml-auto mr-[2vw]"></div>
                    <div>
                      <div className="text-12 md:text-56 xl:text-56">Hershel</div>
                      <div className="text-redText text-10 w-4/6">
                        Head of director GGPL PVT LTD.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-bluebg py-[4vh]">
            <div className="text-blueText text-20 md:text-44 xl:text-44 font-700 w-full md:w-3/6 xl:w-3/6 ml-[10vw]">
              Looking to drive results?{" "}
              <span className="text-orangeText">Lets chat</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
