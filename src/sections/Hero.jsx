import { useState } from "react";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1, bigShoe2, bigShoe3 } from "../assets/images";

function Hero() {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <div
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red ">
          Our Summer Collection
        </p>
        <h1 className="mt-10  font-palanquin text-8xl max-tablet:text-[72px] max-tablet:leading-[82px] max-sm:text-[69px]  font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap  relative z-10 pr-10 ">
            The new Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3 ">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} alt="Arrow-right" />
        <div className="flex justify-start items-start flex-wrap max-sm:justify-between  w-full mt-20 max-sm:gap-8 gap-16">
          {statistics.map((stat) => (
            <div className="" key={stat.label}>
              <p className="text-4xl max-sm:text-[40px] font-palanquin font-bold">
                {stat.value}
              </p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="shoe photo"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, i) => (
            <div key={i} className="">
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImg={setBigShoeImg}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
