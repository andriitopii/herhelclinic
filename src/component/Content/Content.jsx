import { Helmet } from "react-helmet";
import AboutSection from "../AboutSection/AboutSection";
import ContactSection from "../ContactSection/ContactSection";
import Header from "../Header/Header";
import QuateSection from "../QuateSection/QuateSection";
import ServiceSection from "../ServiceSection/ServiceSection";
import VideoSection from "../VideoSection/VideoSection";
import "./Content.scss"
import MediaSection from "../MediaSection/MediaSection";
import WhySection from "../WhySection/WhySection";
import { useInView } from "react-intersection-observer";
import Loader from "../Loader/Loader";
import { lazy, useEffect, useState } from "react";
import favicon from "./favicon.svg";


const Content = () => {
  const {ref, inView} = useInView({threshold: 0.1})
  
  return (
    <>
    <Helmet>
      <title>HERHEL CLINIC - KLINIKA MEDYCYNY ESTETYCZNEJ</title>
      <link rel="icon" type="image/svg+xml" href={favicon} />
    </Helmet>
    
    <Header view={inView}/>
   
      
      <main ref={ref} className={`main`}>
        <ServiceSection/>
        <QuateSection/>
        <VideoSection/>
        <AboutSection/>
        <MediaSection/>
        <WhySection/>
        <ContactSection/>
      </main>
    </>
  );
};

export default Content;
