import React from 'react';

const Gallery = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Gallery</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <img src="/images/gallery/image1.jpg" alt="Gallery Image 1" className="w-full h-64 object-cover rounded"/>
          <img src="/images/gallery/image2.jpg" alt="Gallery Image 2" className="w-full h-64 object-cover rounded"/>
          <img src="/images/gallery/image3.jpg" alt="Gallery Image 3" className="w-full h-64 object-cover rounded"/>
          <img src="/images/gallery/image4.jpg" alt="Gallery Image 4" className="w-full h-64 object-cover rounded"/>
          <img src="/images/gallery/image5.jpg" alt="Gallery Image 5" className="w-full h-64 object-cover rounded"/>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
