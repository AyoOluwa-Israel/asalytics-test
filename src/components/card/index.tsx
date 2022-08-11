import React from "react";
import { getBackgroundColor } from "../../utils/getBackgroundColor";
import Button from "../button";

const Card = ({ assets }: any) => {

  return (
    <div
      className="group h-[180px] rounded-[10px] border-[1px] border-sideBorder  flex items-center flex-col justify-center hover:shadow-3xl transition ease-in-out duration-550 cursor-pointer"
      data-aos="zoom-in"
      data-aos-duration="1500"
      data-testid="card"
      key={assets?.name}
    >
      <div className="w-[40px]">
        <img
          src={`${assets?.logo === null ? "/assets/algo.svg" : assets?.logo}`}
          alt="Algo"
        />
      </div>

      <p className="py-[10px]">{assets?.name}</p>
      <Button
        text={`${assets?.available ? "Available" : "Unavailable"}`}
        styles={`${getBackgroundColor(
          assets?.available
        )} text-[12px] p-[5px] font-normal`}
      />
    </div>
  );
};

export default Card;
