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
const Content = () => {
  return (
    <>
    <Helmet>
      <title>HERHEL CLINIC</title>
    </Helmet>
      <Header />
      <main className="main">
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
