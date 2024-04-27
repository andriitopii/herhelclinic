import { useRef } from "react";
import LineHorizontalBlack from "../Icon/LineHorizontalBlack";
import LineVerticalBlack from "../Icon/LineVerticalBlack";
import LineHorizontalSmall from "../Icon/LineVerticalSmall";
import NextSvg from "../Icon/NextSvg";
import PrevSvg from "../Icon/PrevSvg";
import MediaArticle from "../MediaArticle/MediaArticle";
import "./MediaSection.scss";
import { useInView } from "react-intersection-observer";
const MediaTitle = ({title}) => {
  const {ref, inView} = useInView({threshold: 0.2})
return (
  <h1 ref={ref} className={`section__title ${inView ? "show-animate": ""}`}>{title}</h1>
)
}
const MediaDescrip = ({descrip}) => {
  const {ref, inView} = useInView({threshold: 0.2})
return (
  <p ref={ref} className={`${inView ? "show-animate": ""}`}>{descrip}</p>
)
}
const MediaSection = () => {
  const slider = useRef()
  function scrollSlide (action) {
    const clientWidth = slider.current.clientWidth;
    const scrollWidth = slider.current.scrollWidth;
    const scrollLeft = Math.floor(slider.current.scrollLeft);
    const maxScroll = scrollWidth - clientWidth;
    console.log(scrollLeft);
    console.log(maxScroll);
    
    switch(action){
      case "PREV": 
      if( scrollLeft <= 50){
        slider.current.scrollLeft = maxScroll
      } else {
      slider.current.scrollLeft = scrollLeft - 295}
      break;
      case "NEXT": 
          if((maxScroll - scrollLeft) <= 50){
            slider.current.scrollLeft = 0
          } else {
          slider.current.scrollLeft = scrollLeft + 295}
        
      
      break;
    }
  }
  const {ref: ref1, inView: inView1} = useInView({threshold: 0.2})
  return (
    <section id="media" className="media">
      <div className="media__container container container--column">
        <div className="media__header">
          <div className="media__header_title">
            <MediaTitle title="My w mediach"/> 
            <MediaDescrip descrip="Whether your goals are to rejuvenate your skin, restore facial
              volume, reshape your face and your body or restore your hair,
              Asterie Clinic has you covered."      />     
            
          </div>
          <div ref={ref1} className={`media__header_control ${inView1 ? "show-animate": ""}`}>
            <button onClick={()=>scrollSlide("PREV")}><PrevSvg/></button>
            <LineHorizontalBlack width="73px"/>
            <button onClick={()=>scrollSlide("NEXT")}><NextSvg/></button>
          </div>
        </div>
        <div className="media__content">
          <div ref={slider} className="media__content_slider">
            <MediaArticle/>
            <MediaArticle/>
            <MediaArticle/>
            <MediaArticle/>
            <MediaArticle/>
            <MediaArticle/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
