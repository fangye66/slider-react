import './App.css';

import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

export default function App() {

  const sliderImages  = [
    {
      url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: 'Slide 1'
    },
    {
      url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
      caption: 'Slide 2'
    },
    {
      url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: 'Slide 3'
    },
  ];
   return (
      <div>
         <h3>
            {" "}
            Creating the image slider using the react-simple-image-slider
         </h3>

         <SimpleImageSlider
            width={500}
            height={250}
            images={sliderImages}
            showNavs={true}
         />

      </div>
   );
}