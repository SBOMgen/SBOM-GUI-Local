import React,{ useState } from "react";
import images from "../assets/images";
import Button from "./FormComponent";
// import InputPath from "./InputPath";
// import video from "../assets/track.mp4"
import FileUpload from "./FileUpload";
import FormComponent from "./FormComponent";

const Hero = () => {

  return(
  <section
    id="hero-section"
    className="mt-4 flex flex-col flex-1 justify-center items-center text-center relative z-50"
  >
    <picture className="absolute bottom-0 left-0 -z-50 w-full">
      <source
        media="(min-width:375px )"
        srcSet={images.BackgroundCurveDesktop}
      />
      <img src={images.BackgroundCurveMobile} alt="background-image" />
    </picture>
    <div className="max-w-[500px] ">

      {/* <video autoPlay="autoplay" loop="loop" muted="muted" className="rounded-2xl">
        <source src={video} type="video/mp4" />
      </video> */}
      <img src={images.sbom} alt="sbom" className={`w-full object-fit rounded-3xl`}/>

      <h1 className="text-white text-3xl leading-relaxed font-raleway pt-4">
        SBOM GENERATOR
      </h1>
      <p className="text-white text-sm sm:text-[16px] my-4 leading-10 mx-8 text-white/60 ">
      UPLOAD PATH TO YOUR LOCAL REPOSITORY
      </p>
      {/* <input
        type="file"
        webkitdirectory=""
        className="text-sm text-stone-500 file:mr-5 file:py-1 file:px-3 file:border-[1px] file:text-xs file:font-medium file:bg-stone-50 file:text-stone-700 hover:file:cursor-pointer hover:file:bg-blue-50 hover:file:text-blue-700 mx-6 my-6"
        multiple
      /> */}
      <div className="">
        <div className="px-4 py-4 flex items-center">
        </div>
        {/* <InputPath /> */}
      </div>
      <FormComponent />
      {/* <Button style={{ maxWidth: 250 }}>Generate Report</Button> */}
    </div>
  </section>
  );
};

export default Hero;
