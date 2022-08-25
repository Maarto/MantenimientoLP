// Componentes
import CarouselGallery from "../components/carouselgallery";
import CardComps from "../components/homepagecards";

import { useState } from 'react';
import { useEffect } from "react";

let images = ["obra1.jpg", "obra2.jpg", "obra4.jpg"]

function HomePage() {

    let [renderedpage, setRenderedPage] = useState(true)
    let [loaded, setLoaded] = useState(false)


    function setPage() {
        let condition = renderedpage ? false : true
        setRenderedPage(condition)
        let lCondition = loaded ? false : true
        console.log(lCondition)
        setLoaded(lCondition)
    }

    useEffect(() => {
        setLoaded(true)
        let interval = setInterval(() => {
            setLoaded(true)
        }, 2000)
        return () => clearInterval(interval)
    })

    return (
        <div className="backgroundHomePage">
            <div className="layer">
                <div className="all_container">
                    <div className="homePage__container">
                        <div className="homePage__information">
                            <h1 className="servicestitle">Servicio de <span className="lp"> mantenimiento</span> general.</h1>
                        </div>
                    </div>
                    <div className="buttons_changer">
                        <button onClick={() => setPage()} className={renderedpage ? "btn_active" : "btn_inactive"}>Información</button>
                        <button onClick={() => setPage()} className={renderedpage ? "btn_inactive" : "btn_active"}>Trabajos</button>
                    </div>
                    {
                        renderedpage ?
                            <>
                                <CardComps loaded={loaded}/>
                            </> :
                            <div className="homepage_carousel">
                                <CarouselGallery images={images} showButton={true}/>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}


export default HomePage;