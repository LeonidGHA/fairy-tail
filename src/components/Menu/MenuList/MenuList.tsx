import { Autoplay, Virtual } from "swiper";

import "swiper/css";

import "swiper/css/virtual";
import "swiper/css/autoplay";

import { Swiper, SwiperSlide } from "swiper/react";

import MenuItem from "../MenuItem/MenuItem";

import { IAllMenu } from "@/shared/queryGrahpQl/HomeQuerry/homeQueryModels";

interface IMenuListProps {
  menu: IAllMenu;
}

const MenuList: React.FC<IMenuListProps> = ({ menu }) => {
  const { allVariantDishes } = menu;

  return (
    <Swiper
      modules={[Autoplay, Virtual]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {allVariantDishes.map((menuItem, idx) => (
        <SwiperSlide key={menuItem.id} virtualIndex={idx} className="py-8">
          <MenuItem menuItem={menuItem} key={menuItem.id} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MenuList;
