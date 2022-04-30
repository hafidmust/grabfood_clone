import {BadgeCheckIcon} from "@heroicons/react/solid";

const CardPromotion = ({nameProduct, categoryProduct, image, rating}) => {
  return(
      <div className={"inline-block px-3"}>
        <div className={"bg-white w-64 mt-6 overflow-hidden"}>
          <img className={"rounded-lg"}
               src={image}
               alt={"Promotion"}/>
          <div className={"flex mt-2 items-center"}>
            <BadgeCheckIcon width={"24"} className={"text-custom-green"}/>
            <p className={"text-custom-green font-semibold tracking-wider text-xs"}> Preferred Merchant</p>
          </div>

          <div><h2 className={"text-sm md:text-lg font-semibold tracking-wide mb-2 "}>{nameProduct}</h2></div>
          <p className={"font-light text-xs md:text-sm prose mb-1"}>{categoryProduct}</p>
          <div className={"flex items-center"}>
            <img src={"https://food.grab.com/static/images/icons/icon-star.svg"} width={"24"} alt={"rating"}/>
            <p className={"font-light text-xs md:text-sm prose"}>{rating}</p>
          </div>

        </div>
      </div>
  )
}

export default CardPromotion;