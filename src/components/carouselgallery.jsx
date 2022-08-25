import { useEffect } from "react";
import { useState } from "react";
import styled from 'styled-components'


function CarouselGallery(props) {

    let [selectedIndex, setSelectedIndex] = useState(0)
    let [selectedImage, setSelectedImage] = useState(props.images[0])
    let [loaded, setLoaded] = useState(false)

    function selectNewImage(index, images, next = true) {
        setLoaded(false)
        setTimeout(() => {
            let condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0
            let newIndex = next ? (condition ? selectedIndex + 1 : 0) : (condition ? selectedIndex - 1 : images.length - 1)
            setSelectedImage(images[newIndex])
            setSelectedIndex(newIndex)
        }, 700)
    }

    function previous() {
        selectNewImage(selectedIndex, props.images, false)
    }

    function next() {
        selectNewImage(selectedIndex, props.images)
    }


    useEffect(() => {
        if (props.autoplay || !props.showButton) {
            let interval = setInterval(() => {
                selectNewImage(selectedIndex, props.images);
            }, 2000)
            return () => clearInterval(interval)
        }
    })


    return (
        <div>
            {
                props.showButton ? <>
                    <button className="CarouselButton" onClick={() => {
                        console.log('atras')
                        console.log(loaded)
                        previous()
                    }}>{'<'}</button>
                </> : <></>
            }
            <img src={require(`../assets/img/carousel/${selectedImage}`)}
                alt='testing'
                className={loaded ? "CarouselIMG loaded" : "CarouselIMG"}
                onLoad={() => setLoaded(true)}
                width={20}
                height={20}
            />
            {
                props.showButton ? <>
                    <button className="CarouselButton" onClick={() => {
                        console.log("avanzando")
                        next()
                    }}>{'>'}</button>
                </> : <></>
            }
        </div>
    )

}

export default CarouselGallery