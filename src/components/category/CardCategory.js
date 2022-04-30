
const CardCategory = ({nameCategory, imageCategory}) => {
    return (
        <div className={"inline-block px-3"}>
            <div className={"bg-white md:w-64 md:h-64"}>
                <img className={"rounded-lg"}
                     src={imageCategory}
                     alt={"Category"}/>

                <div><h2 className={"text-sm font-bold tracking-normal py-2"}>{nameCategory}</h2></div>
            </div>


        </div>
    )
}
export default CardCategory;