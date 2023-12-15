import {
  HiHome,
  HiMagnifyingGlass,
  HiPlayCircle,
  HiPlus,
  HiTv,
  
} from "react-icons/hi2";
import HeaderItem from "./HeaderItem";
import { HiOutlineDotsVertical } from "react-icons/hi"
import { useState } from "react";

const Header = () => {
    const [toggle , setToggle] = useState(false)
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WACTH LIST",
      icon: HiPlus,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
    {
      name: "ORIGNALS",
      icon: HiPlus,
    },
  ];
  return (
    <div className="flex justify-between items-center container mx-auto">
      <div className="flex items-center md:gap-7">
        <img
          src="https://i.postimg.cc/PJWWV5tZ/images-removebg-preview.png"
          alt="logo"
          className="w-[80px] md:w-[120px] object-cover"
        />
        <div className="hidden md:flex mt-3 gap-8">
          {menu.map((item) => (
            <HeaderItem
              key={item.name}
              name={item.name}
              Icon={item.icon}
            ></HeaderItem>
          ))}
        </div>
        <div className=" flex md:hidden mt-3 gap-3">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <HeaderItem
                  key={item.name}
                  name={''}
                  Icon={item.icon}
                ></HeaderItem>
              )
          )}
          <div className="md:hidden" onClick={()=>setToggle(!toggle)}>
            <HeaderItem Icon={HiOutlineDotsVertical}></HeaderItem>
          </div>
          {toggle ?<div className="mt-6 mb-2 absolute ml-20 border my-2 bg-[#121212]  p-4 ">
          {menu.map(
            (item, index) =>
              index > 2 && (
                <HeaderItem
                  key={item.name}
                  name={item.name}
                  Icon={item.icon}
                ></HeaderItem>
              )
          )}
          </div>: null}
        </div>
      </div>
      <img
        src="https://i.postimg.cc/Hsk4KD86/imgbin-computer-icons-portable-network-graphics-avatar-icon-design-avatar-Ds-Z54-Du30h-Tr-Kfx-BG5-Pbwvzg-E.png"
        alt=""
        className="rounded-full w-[40px] md:w-[60px] h-[30px] md:h-[40px] mt-3"
      />
    </div>
  );
};

export default Header;
