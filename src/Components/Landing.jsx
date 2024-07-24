import { useState, useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import slide1 from "../../public/assets/slide-1.jpg";
import slide2 from "../../public/assets/slide-2.jpg";
import slide3 from "../../public/assets/slide-3.jpg";
import slide4 from "../../public/assets/slide-4.jpg";
import slide5 from "../../public/assets/slide-5.jpg";

const styles = `
  .slider-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: none;
  }

  .slide-visible {
    display: block;
    z-index: 2;
  }

  .indicator {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
    color: #fff; /* Set text color to white */
  }

  .indicator button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: none;
    background-color: #fff;
    opacity: 0.5;
    cursor: pointer;
  }

  .indicator button.active {
    opacity: 1;
    background-color: #fff; /* Active indicator background color white */
  }

  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    border: none;
    color: #fff;
    cursor: pointer;
    z-index: 10;
    opacity: 0.7;
    background: none;
  }

  .arrow-left {
    left: 20px;
  }

  .arrow-right {
    right: 20px;
  }

  .arrow:hover {
    opacity: 1;
  }

  .black-mask {
    position: absolute;
    width: 100%;
    height: 20%;
    z-index: 3;
  }

  .top-mask {
    top: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }

  .bottom-mask {
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }

  .left-to-right-mask {
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.25));
    z-index: 4;
  }
`;

const styleElement = document.createElement("style");
styleElement.textContent = styles;
document.head.append(styleElement);

function ImagesSlider({ slides, className, autoSlide = true, autoSlideInterval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const resetInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (autoSlide) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, autoSlideInterval);
    }
  }, [autoSlide, autoSlideInterval, slides.length]);

  useEffect(() => {
    resetInterval();
    return () => clearInterval(intervalRef.current);
  }, [resetInterval]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    resetInterval();
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    resetInterval();
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    resetInterval();
  };

  return (
    <section id="home">
      <div className={`relative ${className}`}>
        <div className="slider-wrapper w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentIndex ? 'slide-visible' : ''}`}
            >
              <div className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover"
                  style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'cover' }}
                />
                <div className="black-mask top-mask"></div>
                <div className="absolute inset-0 left-to-right-mask flex items-center md:w-full w-full p-4 md:p-10">
                  <div className="z-20 text-left pl-10">
                    {slide.content}
                  </div>
                </div>
                <div className="black-mask bottom-mask"></div>
              </div>
            </div>
          ))}
        </div>
        <button className="arrow arrow-left" onClick={goToPreviousSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button className="arrow arrow-right" onClick={goToNextSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <div className="indicator">
          {slides.map((_, index) => (
            <button
              key={index}
              className={index === currentIndex ? 'active' : ''}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

ImagesSlider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
  })).isRequired,
  className: PropTypes.string,
  autoSlide: PropTypes.bool,
  autoSlideInterval: PropTypes.number,
};

// Landing Component
const Landing = () => {
  const slides = [
    {
      image: slide1,
      content: (
        <div className="flex flex-col justify-center items-start">
          <p className="font-bold text-3xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-green-50 to-green-500 py-2 md:py-4 pr-20">
            Tree Plantation
          </p>
          <p className="font-bold text-sm md:text-lg bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-2 md:py-4 pr-20">
            &quot;Planting and growing increasing quantities of trees is the <br/>scientific solution to absorbing carbon emissions.&quot; <br /><span className="text-green-700 mt-2">- Martin O&apos;Malley</span>
          </p>
        </div>
      )
    },
    {
      image: slide2,
      content: (
        <div className="flex flex-col justify-center items-start">
          <p className="font-bold text-3xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-blue-50 to-blue-500 py-2 md:py-4 pr-20">
            Water Management
          </p>
          <p className="font-bold text-sm md:text-lg bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-2 md:py-4 pr-20">
            &quot;Water is the lifeblood of our bodies, our economy, our nation, and our well-being.<br/> Managing water wisely is crucial to our survival.&quot; <br /> <span className="text-blue-400 mt-2">- Marq de Villiers</span>
          </p>
        </div>
      )
    },
    {
      image: slide3,
      content: (
        <div className="flex flex-col justify-center items-start">
          <p className="font-bold text-3xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-lime-50 to-lime-500 py-2 md:py-4 pr-20">
            Sustainable Agriculture
          </p>
          <p className="font-bold text-sm md:text-lg bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-2 md:py-4 pr-20">
            &quot;Sustainable agriculture is Landing taking care of the land and ensuring it can <br /> provide for future generations.&quot;<br /> <span className="text-lime-600 mt-2">- Wendell Berry</span>
          </p>
        </div>
      )
    },
    {
      image: slide4,
      content: (
        <div className="flex flex-col justify-center items-start">
          <p className="font-bold text-3xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-green-300 to-green-900 py-2 md:py-4 pr-20">
            Mangrove Conservation
          </p>
          <p className="font-bold text-sm md:text-lg bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-2 md:py-4 pr-20">
            &quot;Mangroves are not just trees; they are a vital coastal ecosystem that protects shorelines,<br /> supports biodiversity, and helps combat climate change. Their conservation is crucial for a sustainable future.&quot;<br /> <span className="text-green-900 mt-2">- Jane Goodall</span>
          </p>
        </div>
      )
    },
    {
      image: slide5,
      content: (
        <div className="flex flex-col justify-center items-start">
          <p className="font-bold text-3xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-gray-400 to-gray-600 py-2 md:py-4 pr-20">
            Air Pollution <br />Reduction
          </p>
          <p className="font-bold text-sm md:text-lg bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-2 md:py-4 pr-20">
            &quot;We must act now to reduce air pollution and create a cleaner, healthier environment for all.<br/> The cost of inaction is too high, for our health and our planet.&quot;<br /> <span className="text-gray-400 mt-2">- Ban Ki-moon</span>
          </p>
        </div>
      )
    },
  ];

  return (
    <ImagesSlider className="h-[45.75rem] w-full" slides={slides} />
  );
}

export default Landing;
