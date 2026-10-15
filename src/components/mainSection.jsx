import foto1 from "../assets/imagen1.jpg";
import foto2 from "../assets/imagen2.jpg";
import foto3 from "../assets/imagen3.jpg";
import foto4 from "../assets/imagen4.jpg";
import foto5 from "../assets/imagen5.jpg";
import foto6 from "../assets/imagen6.jpg";

import { Rate } from "./Rate";
import { useState, useRef } from "react";

function MainSection() {
  const [images, setImages] = useState([{ "src": foto1, "rate": 0, id: 0, ref: useRef() },
  { "src": foto2, "rate": 0, id: 1, ref: useRef() },
  { "src": foto3, "rate": 0, id: 2, ref: useRef() },
  { "src": foto4, "rate": 0, id: 3, ref: useRef() },
  { "src": foto5, "rate": 0, id: 4, ref: useRef() },
  { "src": foto6, "rate": 0, id: 5, ref: useRef() }]);

  const editaRate = (id, newRate) => {

    const newImages = images.map((img, i) => {
      if (img.id == id)
        return { ...img, "rate": newRate };
      else
        return img;
    });

    newImages.sort((a, b) => { return b.rate - a.rate });

    setImages(newImages);

  }

  const saludarImagenes = () => {
    images.forEach((img) => {
      img.ref.current.saludar();
    })

    clickSaludar.current = clickSaludar.current + 1;
    console.log("he saludado " + clickSaludar.current + " veces");
  }

  return (
    <>
      <div className="mainSection">

        {images.map((img, i) => (
          <div className="scoreCard" key={i}>
            <img src={img.src} alt="imagen" />
            <Rate editaRate={editaRate} id={img.id} rate={img.rate} ref={img.ref}></Rate>
          </div>
        ))}


      </div>
      <div>
        <button className="boton" onClick={() => saludarImagenes()}>saludar</button>
      </div>
    </>
  );

}

export default MainSection;
