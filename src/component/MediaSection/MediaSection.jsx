import MediaArticle from "../MediaArticle/MediaArticle";
import "./MediaSection.scss";
const MediaSection = () => {
  return (
    <section id="media" className="media">
      <div className="media__container container container--column">
        <div className="media__header">
          <div className="media__header_title">
            <h1 className="section__title">Jesteśmy w mediach</h1>
            <p>
              Whether your goals are to rejuvenate your skin, restore facial
              volume, reshape your face and your body or restore your hair,
              Asterie Clinic has you covered.
            </p>
          </div>
          <div className="media__header_control">
            <button>PREV</button>
            <button>PREV</button>
          </div>
        </div>
        <div className="media__content">
          <div className="media__content_slider">
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
