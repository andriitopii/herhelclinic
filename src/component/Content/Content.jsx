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
import { useEffect, useState } from "react";
const Content = () => {
  const {ref, inView} = useInView({
    threshold: 0.1
  })
  
  return (
    <>
    <Helmet>
      <title>HERHEL CLINIC</title>
    </Helmet>
    
    <Header visible={inView}/>
   
      
      <main ref={ref} className="main">
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
