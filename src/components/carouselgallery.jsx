import { useEffect } from "react";
import { useState } from "react";
import styled from 'styled-components'

let CarouselIMG = styled.img`
max-width: 500px;
width: 100%;
height: auto;
opacity: 0;
transition: 1s;
&.loaded {
  opacity: 1;
}
`;

let CarouselButtonContainer = styled.div`
display: flex;
align-content: center;
flex-direction: row;
margin-top: 15px;
`;

let CarouselButton = styled.button`
  color: white;
  background-color: #eb118a;
  padding: 8px;
  margin: 0 5px;
`;


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
            <CarouselIMG src={require(`../assets/img/carousel/${selectedImage}`)}
                alt='testing'
                className={loaded ? "loaded" : ""}
                onLoad={() => setLoaded(true)} 
            />

            <CarouselButtonContainer>

                {
                    props.showButton ?
                        <>
                            <CarouselButton onClick={() => {
                                console.log('atras')
                                console.log(loaded)
                                previous()
                            }}>Volver</CarouselButton>
                            <CarouselButton onClick={() => {
                                console.log("avanzando")
                                next()
                            }}>Seguir</CarouselButton>
                        </>
                        : <></>
                }
            </CarouselButtonContainer>
        </div>
    )

}

export default CarouselGallery