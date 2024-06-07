import direction from "../assets/direction.png";

const Card = ({ item }: { item: any }) => {
  const discounts = item.day_pass_discounts_percentage;
  const dayPassPrice = item.day_pass_price;
  const getImageSrc = () => {
    return require(`../data/${item.images}`);
  };
  return (
    <div className="w-[100%] p-4 rounded-[8px] border border-[#EEE7E7] shadow-[0_3px_10px_rgb(0,0,0,0.2)]  bg-white">
      <div className="flex justify-between items-center">
        <div className="text-[18px] md:text-[20px] font-medium w-2/3">
          {item.name}
        </div>
        <img
          src={direction}
          alt="direction"
          className="w-[44px] h-[44px] md:w-[52px] md:h-[52px]"
        />
      </div>
      <img
        src={getImageSrc()}
        className="w-full h-[175px] md:h-[202px] rounded-[6px] mt-2"
      />
      <div className="flex justify-between mt-4">
        {item.is_day_pass_enabled && (
          <>
            {Object.keys(discounts).map((days: string, index) => {
              const discount = discounts[days];

              let color = "bg-[#F9F9F9]  border-[#E5DDDD]";
              if (Number(days) === 10) {
                color = "bg-[#FFCF4B] border-[#FFC422]";
              }
              if (discount) {
                const discountedPrice = dayPassPrice * Number(days);

                return (
                  <div
                    className={`relative flex justify-between border p-2 w-[48%] rounded-[5px] ${color}`}
                    key={index}
                  >
                    {discount.value > 0 && (
                      <div className="absolute top-[-10px] left-[23px] md:left-[30px] flex justify-center items-center rounded-[4px] text-xs h-[20px]  w-[100px] bg-[#263238] text-white">
                        {discount.value} % Discount
                      </div>
                    )}
                    <h1 className="text-xs md:text-sm leading-6">
                      Day pass
                      <br />
                      <span className="text-sm font-bold">
                        ₹{discountedPrice}/
                        <span className="text-xs font-normal">Day</span>
                      </span>
                    </h1>
                    <div>{`>>>`}</div>
                  </div>
                );
              } else {
                return null; // or handle the case where discount is undefined
              }
            })}
          </>
        )}
      </div>
    </div>
  );
};
export default Card;
