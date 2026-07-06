import React, { useState } from "react";
import { Element } from "react-scroll";
import img1 from '../../assets/gallery/img1.png'
import img2 from '../../assets/gallery/img2.png'
import img3 from '../../assets/gallery/img3.png'
import img4 from '../../assets/gallery/img4.png'
import img5 from '../../assets/gallery/img5.png'


function Gallery() {
  const images = [img2, img1, img3, img4, img5];
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <Element name="gallery">
      <section className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-screen mb-[50px]">
        <img
          src={activeImage}
          alt="Gallery"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20"></div>

        <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 lg:bottom-8">
          <div className="flex flex-col items-center gap-2 rounded-lg bg-black/40 p-2 backdrop-blur-sm lg:flex-row lg:gap-5">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(image)}
                className={`h-[70px] w-[120px] overflow-hidden transition-all duration-300 lg:h-[106px] lg:w-[182px] ${
                  activeImage === image
                    ? "scale-105 ring-2 ring-white"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Gallery
