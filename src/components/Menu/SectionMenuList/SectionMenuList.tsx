import { Autoplay, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import MenuItem from "../SectionMenuItem/SectionMenuItem";

import useResizeScreen from "@/shared/hooks/useResizeScreen";

import { IAllMenu } from "@/shared/queryGrahpQl/QueryModels";

import "swiper/css";
import "swiper/css/virtual";
import "swiper/css/autoplay";

interface IMenuListProps {
  menu: IAllMenu;
}

const SectionMenuList: React.FC<IMenuListProps> = ({ menu }) => {
  const { allVariantDishes } = menu;
  const { isMobile, isTablet } = useResizeScreen();

  const slidesPerViewResize = () => {
    return isMobile ? 2 : isTablet ? 3 : 4;
  };

  return (
    <Swiper
      modules={[Autoplay, Virtual]}
      spaceBetween={30}
      slidesPerView={slidesPerViewResize()}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="grow"
    >
      {allVariantDishes.map((menuItem, idx) => (
        <SwiperSlide key={menuItem.id} virtualIndex={idx} className="grow pb-8">
          <MenuItem menuItem={menuItem} key={menuItem.id} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SectionMenuList;
