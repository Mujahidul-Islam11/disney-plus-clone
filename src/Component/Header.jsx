import {
  HiHome,
  HiMagnifyingGlass,
  HiPlayCircle,
  HiPlus,
  HiTv,
} from "react-icons/hi2";
import HeaderItem from "./HeaderItem";

const Header = () => {
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
  ];
  return (
    <div className="flex justify-between items-center container mx-auto">
      <div className="flex items-center gap-7">
        <img
          src="https://i.postimg.cc/PJWWV5tZ/images-removebg-preview.png"
          alt="logo"
          className="w-[80px] md:w-[120px] object-cover"
        />
        <div className="flex mt-3">
          {menu.map((item) => (
            <HeaderItem
              key={item.name}
              name={item.name}
              Icon={item.icon}
            ></HeaderItem>
          ))}
        </div>
      </div>
      <img
        src="https://i.postimg.cc/Hsk4KD86/imgbin-computer-icons-portable-network-graphics-avatar-icon-design-avatar-Ds-Z54-Du30h-Tr-Kfx-BG5-Pbwvzg-E.png"
        alt=""
        className="rounded-full w-[60px] h-[40px] mt-3"
      />
    </div>
  );
};

export default Header;
