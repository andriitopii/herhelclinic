import { useRef, useState } from "react";
import "./VideoSection.scss";
import videoVideo from "./videosection.mp4";
import posterVideo from "./postervideo.jpg"
const VideoSection = () => {
    const video = useRef()
    const [videoConrol, setVideoControl] = useState(false)
    console.dir(video.current)
    function controlVideo(){
        setVideoControl(!videoConrol);
        if(videoConrol){
            video.current.play()
        } 
        
    }
  return (
    <section id="video" className="video">
      <video  controls={videoConrol ? true : false} onClick={()=>controlVideo()}ref={video}  src={videoVideo} poster={posterVideo} className="video__media"></video>
    </section>
  );
};

export default VideoSection;
