import React, { lazy, memo } from 'react';
import Header from "../components/Header";
const MiddleContent = lazy(() => import("../components/MiddleContent"));
import Navigation from "../components/Navigation";

const Home = memo(function Home() {
  return (
    <div className="w-full flex justify-center h-screen ">
      <div className="w-fit h-[100%] bg-indigo-300 flex flex-col justify-center items-center fixed top-0">
        <Header />
        <MiddleContent />
        <Navigation />
      </div>
    </div>
  )
}
);


export default Home;