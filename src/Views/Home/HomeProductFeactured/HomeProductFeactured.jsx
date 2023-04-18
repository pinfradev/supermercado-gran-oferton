import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const HomeProductFeactured = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return(
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blt7618b97ead3408c5/642c734f5f168f10bc19ee9f/02-vitrina-hogar-dk-120423-CR.jpg?disable=upscale&format=webp&quality=70&width=1920"
          alt="First slide"
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blt6373e9f493d0e3ce/6436257b8aab7b10efdf2a82/tenis-nike-adidas-vitrina-5-dk-lanzamiento-JDM.jpg?disable=upscale&format=webp&quality=70&width=1920"
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.falabella.com/v3/assets/blt088e6fffbba20f16/bltd9e92c9c7d32d64e/64359428eb41fa1100c83c7c/06-Vitrinaemprendedores-desk-110423-PR.jpg?disable=upscale&format=webp&quality=70&width=1920"
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>
    );
}
export default HomeProductFeactured;