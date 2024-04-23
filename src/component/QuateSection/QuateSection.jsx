import LineHorizontalSmall from "../Icon/LineVerticalSmall";
import "./QuateSection.scss";
const QuateSection = () => {
    return ( 
        <section id="quate" className="quate">
            <div className="container container--column">
                <h1>“Zatrzymaj się nad pięknem <span className="quate__img1"></span> życia.</h1>
                <h1>Obserwuj gwiazdy i zobaczyć siebie</h1>
                <h1><span className="quate__img2"></span> biegnącą razem z nimi.”</h1>
                <LineHorizontalSmall/>
                <p>MARCUS AURELIUS</p>
            </div>
        </section>
     );
}
 
export default QuateSection;