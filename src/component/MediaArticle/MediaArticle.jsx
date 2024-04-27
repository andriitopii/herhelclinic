import { useInView } from "react-intersection-observer";
import ArrowSvg from "../Icon/ArrowSvg";
import "./MediaArticle.scss" 
const MediaArticle = () => {
  const {ref, inView} = useInView({threshold: 0.1})
  return (
      
      <article ref={ref}  className={`media-article ${inView ? "show-animate": ""}`}>
        <img loading="lazy" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" />
        <h2>Herhel Clinic: ваш пункт призначення для косметологічного туризму у Варшаві</h2>
        <a href="#"><strong>READ MORE</strong> <ArrowSvg width="32px" height="32px"/></a>
      </article>
    
  );
};

export default MediaArticle;
