import React, { useState } from 'react';
import { CarouselData } from './CarouselData';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const length = CarouselData.length;

  const nextSlide = () => {
    if (current !== 1) {
      setCurrent(current + 1);
    }
  };

  const prevSlide = () => {
    if (current !== 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <>
      <section className='slider'>
        <button
          className={current !== 0 ? 'icon-container' : 'icon-container hidden'}
        >
          <Image
            src='/assets/left-arrow.svg'
            layout='fill'
            className='icon-svg'
            onClick={prevSlide}
          ></Image>
        </button>

        <section className='images-container'>
          {current === 0 &&
            CarouselData.map((slide, index) => {
              if (index >= 5) {
                return;
              }
              return (
                <div key={index} className='image-container'>
                  <div className='image-scale'>
                    <Image
                      src={CarouselData[index].image}
                      layout='fill'
                      objectFit='cover'
                      alt='alt text'
                    />
                  </div>
                </div>
              );
            })}
          {current === 1 &&
            CarouselData.map((slide, index) => {
              if (index < 5) {
                return;
              }
              console.log(CarouselData.length - 5, index + 1);
              return (
                <div key={index} className='image-container'>
                  <div className='image-scale'>
                    <Image
                      src={CarouselData[index].image}
                      layout='fill'
                      objectFit='cover'
                      alt='alt text'
                    />
                  </div>
                </div>
              );
            })}

          <button
            className={
              current !== 1
                ? 'icon-container right'
                : 'icon-container right hidden'
            }
          >
            <Image
              src='/assets/right-arrow.svg'
              layout='fill'
              className='icon-svg'
              onClick={nextSlide}
            ></Image>
          </button>
        </section>
      </section>
      <style jsx>{`
        .slider {
          /* background-color: #000; */
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .icon-container {
          height: 23px;
          width: 23px;
          position: relative;
          margin-right: 6px;
          position: absolute;
          cursor: pointer;
        }
        .right {
          right: 20px;
        }
        .icon-svg {
          position: relative;
          background-color: #fff;
        }
        .image-scale {
          transition: transform 0.5s ease;
          width: 172px;
          height: 258px;
          overflow: hidden;
          margin: auto;
        }
        .image-container:hover .image-scale {
          transform: scale(1.1);
        }
        .images-container {
          display: flex;
          width: 944px;
          height: 258px;
          justify-content: space-between;
          align-items: center;
        }
        .image-container {
          width: 172px;
          height: 258px;
          position: relative;
          overflow: hidden;
        }
        .hidden {
          opacity: 0;
        }
      `}</style>
    </>
  );
};

export default Carousel;
