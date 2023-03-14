//This is a component which displays any images placed in the ../media/gallery-images folder in an auto height, fixed width carousel. It uses the image file's name as the title on the carousel.

import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

//Importing bootstrap components
import Carousel from 'react-bootstrap/Carousel'

//Loading configuration
import configData from '../config/barber-site.config.json';

//Loading all styling modules
import staticFeatures from "../css-modules/static.module.css";
import modernStyle from "../css-modules/modern.module.css";

//Importing gallery images
function importAllImages(importFunction) {
  return importFunction.keys().map(importFunction);
}

const galleryImages = importAllImages(require.context('../media/gallery-images/', false, /\.(png|jpe?g|svg)$/));

//Determine website styling module from the config file
const websiteStyle = (function() {
  if (configData.STYLE === "modern"){
    return modernStyle
  }
})();

//Generate JSX for carousel items
function generateCarouselJSX() {
  const carouselJSX = galleryImages.map((image) => {
    const imagePath = String(image)
    const imageName = imagePath.slice(14, imagePath.indexOf("."));

    return (
        <Carousel.Item className={staticFeatures.galleryImage}>
          <img className={staticFeatures.galleryImage} src={image} alt="First slide"/>
      
          <Carousel.Caption>
            <h1 className={websiteStyle.h1}>{imageName}</h1>
          </Carousel.Caption>
      </Carousel.Item>
    )
  });

  return carouselJSX;
}

export default class Gallery extends Component {
  render() {
    return (
    <div className={staticFeatures.galleryContainer}>
        <Carousel className={staticFeatures.carousel}>
            {generateCarouselJSX()}
        </Carousel>
    </div>
    );
  }
}