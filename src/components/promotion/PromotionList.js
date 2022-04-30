import CardPromotion from "./CardPromotion";
import './promotion.css'
const PromotionList = ({promos}) => {
  return(
      <div className={"flex overflow-x-scroll hide-scroll-bar pb-12"}>
      <div className={"flex flex-nowrap"}>
          {
              promos.map((_,i)=>{
                  return <CardPromotion
                      key={i}
                      nameProduct={promos[i].nameProduct}
                      image={promos[i].image}
                      categoryProduct={promos[i].categoryProduct}
                      rating={promos[i].rating}
                      />
              })
          }
      </div>
      </div>
  )
}
export default PromotionList;