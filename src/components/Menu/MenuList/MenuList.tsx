import { Autoplay, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import MenuItem from "../MenuItem/MenuItem";

import useResizeScreen from "@/shared/hooks/useResizeScreen";

import { IAllMenu } from "@/shared/queryGrahpQl/HomeQuerry/homeQueryModels";

import "swiper/css";
import "swiper/css/virtual";
import "swiper/css/autoplay";

interface IMenuListProps {
  menu: IAllMenu;
}

const MenuList: React.FC<IMenuListProps> = ({ menu }) => {
  const { allVariantDishes } = menu;
  const { isMobile, isTablet } = useResizeScreen();

  const slidesPerViewResize = () => {
    return isMobile ? 1 : isTablet ? 3 : 4;
  };

  return (
    <Swiper
      modules={[Autoplay, Virtual]}
      spaceBetween={50}
      slidesPerView={slidesPerViewResize()}
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
