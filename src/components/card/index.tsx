import React from "react";
import { getBackgroundColor } from "../../utils/getBackgroundColor";
import Button from "../button";
import { Asa } from "../../../src/types/index";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Skeletons from "../Loader";

const Card = ({ assets }: any) => {
  const { name, available, logo }: Asa = assets;

  return (
    <div
      className="group h-[180px] rounded-[10px] border-[1px] border-sideBorder  flex items-center flex-col justify-center hover:shadow-3xl transition ease-in-out duration-550 cursor-pointer"
      data-aos="zoom-in"
      data-aos-duration="1500"
    >
      <div className="w-[40px]">
        <img src={`${logo === null ? "/assets/algo.svg" : logo}`} alt="Algo" />
      </div>

      <p className="py-[10px]">{name}</p>
      <Button
        text={`${available ? "Available" : "Unavailable"}`}
        styles={`${getBackgroundColor(
          available
        )} text-[12px] p-[5px] font-normal`}
      />
    </div>
  );
};

export default Card;
