import PromotionList from "./PromotionList";


function Promotion({promos}) {
    return (
        <div className={"bg-white"}>
            <div className={"container mx-auto mt-12"}>
                <div>
                    <h1 className={"text-2xl md:text-4xl font-semibold tracking-wide"}>GrabFood Promo in <span
                        className={"text-custom-green"}>Jakarta</span></h1>
                </div>
                <div>
                    <PromotionList promos={promos}/>
                    <div
                        className={"border border-gray-400  rounded-lg hover:border-custom-green"}>

                        <button type="submit" className={"w-full p-3 text-gray-600 font-extrabold tracking-tight text-sm hover:text-custom-green"}>See all
                            promotions
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promotion;