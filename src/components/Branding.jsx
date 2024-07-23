import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';

const brands = [
  {
    name: "Porsche",
    imgSrc: "https://static.vecteezy.com/system/resources/previews/020/500/054/non_2x/porsche-brand-logo-car-symbol-with-name-white-design-german-automobile-illustration-with-black-background-free-vector.jpg",
    altText: "Porsche"
  },
  {
    name: "Lamborghini",
    imgSrc: "src/components/lambo.jpg",
    altText: "Lamborghini"
  },
  {
    name: "McLaren",
    imgSrc: "src/components/mclaern.jpg",
    altText: "McLaren"
  },
  {
    name: "Bentley",
    imgSrc: "src/components/bentley.jpg",
    altText: "Bentley"
  }
];

const Branding = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <Element id="brands-section" className="bg-slate-200" style={{ padding: '89px' }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {brands.map((brand, index) => (
          <div key={index} className="card card-compact bg-base-100 w-full shadow-xl">
            <figure>
              <img src={brand.imgSrc} alt={brand.altText} className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{brand.name}</h2>            
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Element>
  );
};

export default Branding;
