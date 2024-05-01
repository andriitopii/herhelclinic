import { useEffect, useRef, useState } from "react";
import "./VideoSection.scss";
import videoVideo from "./videosection.mp4";
import posterVideo from "./postervideo.webp"
import { useInView } from "react-intersection-observer";
const VideoSection = () => {
    const refVideo = useRef();
    
    const {ref, inView} = useInView({
      threshold: 0.2,
    })
    
    useEffect(()=> {
      if(inView){
        refVideo.current.play()
      }else {
        refVideo.current.pause()
      }
    }, [inView])

  return (
    <section ref={ref} id="video" className="video">
      <video ref={refVideo} playsInline muted   loop  src={videoVideo}  className={`video__media ${inView ? "show-animate": "hide-animate"}`}></video>
    </section>
  );
};

export default VideoSection;
