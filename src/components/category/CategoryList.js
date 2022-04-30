import CardCategory from "./CardCategory";

const CategoryList = ({categorys}) => {
  return(
      <div className={"grid grid-cols-2 md:grid-cols-4"}>
        {
          categorys.map((_,i)=>{
            return <CardCategory
                key={i}
                nameCategory={categorys[i].nameCategory}
                imageCategory={categorys[i].imageCategory} />
          })

        }
      </div>
  )
}
export default CategoryList;