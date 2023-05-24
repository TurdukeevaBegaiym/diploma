
import React from 'react';
import Carousel from './Carousel';

export default function Delivery() {
  const items = [
    {
      imageUrl: 'https://example.com/image1.jpg',
      title: 'Item 1',
    },
    {
      imageUrl: 'https://example.com/image2.jpg',
      title: 'Item 2',
    },
    {
      imageUrl: 'https://example.com/image3.jpg',
      title: 'Item 3',
    },
  ];

  return (
    <div className="Delivery">
      <h1>Delivery</h1>
      <p>This is my home page</p>
      <Carousel items={items} />
    </div>
  );
}