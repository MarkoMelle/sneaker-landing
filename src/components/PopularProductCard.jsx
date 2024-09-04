const StarIcon = ({ color }) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0755 1.24162C10.4158 0.416631 11.5842 0.416631 11.9245 1.24162L13.9694 6.20014C14.2507 6.88227 14.8848 7.3541 15.619 7.42766L20.796 7.94636C21.6527 8.03219 22.0077 9.08845 21.3767 9.67424L17.3747 13.3897C16.8594 13.8681 16.6332 14.582 16.7789 15.2699L17.9307 20.7069C18.1132 21.5686 17.1733 22.2283 16.425 21.7638L12.0548 19.051C11.4088 18.6499 10.5912 18.6499 9.94518 19.051L5.57504 21.7638C4.82673 22.2283 3.88681 21.5686 4.06934 20.7069L5.22109 15.2699C5.36681 14.582 5.14058 13.8681 4.62527 13.3897L0.62328 9.67424C-0.00768149 9.08845 0.347297 8.03219 1.20397 7.94636L6.38103 7.42766C7.11522 7.3541 7.74926 6.88227 8.03058 6.20014L10.0755 1.24162Z"
        fill={color || "currentColor"}
      />
    </svg>
  );
};

function RatingStars({ rating }) {
  const stars = Array(5)
    .fill(0)
    .map((_, index) => {
      const starValue = index + 1;

      return (
        <div className="flex justify-center items-center w-[24px] h-[24px]">
          <StarIcon
            key={index}
            color={starValue <= rating ? "#FF6452" : "#D3D3D3"}
          />
        </div>
      );
    });

  return <div className="flex justify-center items-center gap-1">{stars}</div>;
}

function PopularProductCard({ imgURL, name, price }) {
  const rate = (() => {
    return (Math.random() * (5 - 3.5) + 3.5).toFixed(2);
  })();
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px] " />
      <div className="mt-8 flex justify-start gap-2.5">
        <RatingStars rating={parseFloat(rate)} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          &#40;
          {rate}
          &#41;
        </p>
      </div>
      <h3 className="mt-2 text-xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat  text-coral-red text-2xl leading-normal">
        {price}
      </p>
    </div>
  );
}

export default PopularProductCard;
