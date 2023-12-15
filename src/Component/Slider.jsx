/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import Global from "../Services/Global";
import AwesomeSlider from "react-awesome-slider";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
const Image_baseUrl = "https://image.tmdb.org/t/p/original";

const Slider = () => {
  const [movies, setMovies] = useState([]);

  const elementRef = useRef()
  useEffect(() => {
    getTrendingVideos();
  }, []);

  const slideRight = (element) =>{
    element.scrollLeft+=window.innerWidth-110;
  }
  const slideLeft = (element) =>{
    element.scrollLeft-=window.innerWidth-110;
  }

  const getTrendingVideos = () => {
    Global.getTrendingVideos.then((res) => {
      console.log(res.data);
      setMovies(res.data.results);
    });
  };
  return (
    <div>
      <div className="flex scroll-smooth overflow-x-auto px-16 py-4 scrollbar-none " ref={elementRef}>
        {movies.map((item, index) => (
          <>
            <img
              src={Image_baseUrl + item.backdrop_path}
              alt=""
              className="hover:border-4 border-gray-400 transition-all duration-100 ease-in min-w-full select-none md:h-[310px] object-left-top mr-5 object-cover rounded-lg"
            />
          </>
        ))}
      </div>
      <div className="flex justify-center">
      <HiChevronLeft onClick={()=> slideLeft(elementRef.current)} className="hidden md:block text-white cursor-pointer text-[30px] mx-8"></HiChevronLeft>
     <HiChevronRight onClick={()=> slideRight(elementRef.current)} className="hidden md:block text-white cursor-pointer text-[30px] mx-8"></HiChevronRight>
      </div>
    </div>
  );
};

export default Slider;
