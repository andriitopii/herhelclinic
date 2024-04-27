import { useInView } from "react-intersection-observer";
import skeleton from "./SKELETON.svg";
const WhyGridImage = ({img, className }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
   
  });
  const { ref:ref2, inView:inView2 } = useInView({
    threshold: 0.2,
   triggerOnce: true
  });
  
  return (
    <div
      ref={ref}
      className={`${className} ${inView ? "show-animate" : ""}`}
    >
        
        {inView2 ? <img width="100%" height="100%" loading="lazy" src={img}/> : <img ref={ref2} loading="lazy" src={skeleton}/>}
    </div>
  );
};

export default WhyGridImage;
