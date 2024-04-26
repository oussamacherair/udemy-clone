import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { NumericFormat } from "react-number-format";

export function reviewStar(rate) {
  let stars;

  if (rate > 4.5) {
    stars = (
      <div className="flex justify-between items-center text-yellow-800 text-sm ">
        <FaStar />
        <FaStar className="mx-[2px] " />
        <FaStar className="mx-[2px]" />
        <FaStar className="mx-[2px]" />
        <FaStar />
      </div>
    );
  } else if ((rate > 4) & (rate < 5)) {
    stars = (
      <div className="flex justify-between items-center text-yellow-800 ">
        <FaStar />
        <FaStar className="mx-[2px]" />
        <FaStar className="mx-[2px]" />
        <FaStar className="mx-[2px]" />
        <FaStarHalfAlt />
      </div>
    );
  } else if (rate == 4) {
    stars = (
      <div className="flex justify-between items-center text-yellow-800 ">
        <FaStar />
        <FaStar className="mx-[2px]" />
        <FaStar className="mx-[2px]" />
        <FaStar className="mx-[2px]" />
        <FaRegStar />
      </div>
    );
  } else if ((rate > 3) & (rate < 4)) {
    stars = (
      <div className="flex justify-between items-center text-yellow-800 ">
        <FaStar />
        <FaStar className="mx-[2px]" />
        <FaStar className="mx-[2px]" />
        <FaStarHalfAlt className="mx-[2px]" />
        <FaRegStar />
      </div>
    );
  } else if (rate == 3) {
    stars = (
      <div className="flex justify-between items-center text-yellow-800 ">
        <FaStar />
        <FaStar className="mx-[2px]" />
        <FaStar className="mx-[2px]" />
        <FaStarHalfAlt className="mx-[2px]" />
        <FaRegStar />
      </div>
    );
  } else if ((rate > 2) & (rate < 3)) {
    stars = (
      <div className="flex justify-between items-center text-yellow-800 ">
        <FaStar />
        <FaStar className="mx-[2px]" />
        <FaStarHalfAlt className="mx-[2px]" />
        <FaRegStar className="mx-[2px]" />
        <FaRegStar />
      </div>
    );
  } else if (rate == 2) {
    stars = (
      <div className="flex justify-between items-center text-yellow-800 ">
        <FaStar />
        <FaStar className="mx-[2px]" />
        <FaRegStar className="mx-[2px]" />
        <FaRegStar className="mx-[2px]" />
        <FaRegStar />
      </div>
    );
  } else if ((rate > 1) & (rate < 2)) {
    stars = (
      <div className="flex justify-between items-center text-yellow-800">
        <FaStar />
        <FaStarHalfAlt className="mx-[2px]" />
        <FaRegStar className="mx-[2px]" />
        <FaRegStar className="mx-[2px]" />
        <FaRegStar />
      </div>
    );
  } else if (rate == 1) {
    stars = (
      <div className="flex justify-between items-center text-yellow-800">
        <FaStar />
        <FaRegStar className="mx-[2px]" />
        <FaRegStar className="mx-[2px]" />
        <FaRegStar className="mx-[2px]" />
        <FaRegStar />
      </div>
    );
  }

  return stars;
}

export const price = (max, min) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
