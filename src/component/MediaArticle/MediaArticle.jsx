import { useInView } from "react-intersection-observer";
import ArrowSvg from "../Icon/ArrowSvg";
import "./MediaArticle.scss" 
const MediaArticle = ({urlImg, urlPost, title}) => {
  const {ref, inView} = useInView({threshold: 0.1, triggerOnce: true})
  return (
      
      <article ref={ref}  className={`media-article ${inView ? "show-animate": ""}`}>
        <img width="100%" height="100%" loading="lazy" src={urlImg} alt={title} />
        <h2><a href={urlPost} title={title}>{title}</a></h2>
        <a href={urlPost} target="__blank"><strong>READ MORE</strong> <ArrowSvg width="32px" height="32px"/></a>
      </article>
    
  );
};

export default MediaArticle;
