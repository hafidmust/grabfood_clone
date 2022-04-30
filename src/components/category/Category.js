import CategoryList from "./CategoryList";

const Category = ({categorys}) => {
  return(
      <div className={"bg-white"}>
      <div className={"container mx-auto"}>
          <div>
          <h1 className={"text-2xl py-4 mx-2 md:text-4xl font-bold md:py-12"}>There's something for everyone!</h1>
          </div>
          <div className={""}>
              <CategoryList categorys={categorys} />
          </div>

      </div>
      </div>




  )
}
export default Category;