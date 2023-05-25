import React, { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routesConfig";
import "./app.css";
import Lottie from "react-lottie";
import lottiData from "./app/asserts/jsondata.json";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: lottiData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const App = () => {
  const [loading, setLoading] = useState(true);
  const letters = "Marketing".split('');
  const number=Math.floor(Math.random() * 5)*100;
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 0);
    // scrollTo(0)
  });

  if (loading)
    return (
      <div className="flex flex-col justify-center items-center h-screen">
         <span className="colored-word">
      {letters.map((letter, index) => (
        <span
          key={index}
          className="colored-letter"
          style={{ animationDelay: `${index * 500}ms`, color:"#FF6E6C"}}
        >
          {letter}
        </span>
      ))}
    </span>
        <Lottie
          options={defaultOptions}
          height={300}
          width={300}
          // isStopped={isStopped}
          // isPaused={isPaused}
        />
      </div>
    );
  return <RouterProvider router={router} />;
};

export default App;
