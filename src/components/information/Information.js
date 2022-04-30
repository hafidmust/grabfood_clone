import facebook from './facebook-brands.svg'
import instagram from './instagram-brands.svg'
import twitter from './twitter-brands.svg'
import './information.css'
import {useState} from "react";
const Information = () => {
    const [active, setActive] = useState(false)
    return (
        <div className={"bg-white"}>
            <div>
                {/*    why grab food  */}
                <div className={"container mx-auto"}>
                    <h1 className={"text-3xl mx-2 md:text-4xl font-bold pt-6"}>Why GrabFood?</h1>
                    <ul className={"my-6 tracking-normal text-sm "} style={{listStyleType: "bi bi-check"}}>
                        <li><span className={"font-semibold"}>Quickest</span> - GrabFood provides the fastest food
                            delivery
                            in the market.
                        </li>
                        <li><span className={"font-semibold"}>Easiest</span> - Now grabbing your food is just a few
                            clicks
                            or taps away. Order online or download our Grab super app for a faster and more rewarding
                            experience.
                        </li>
                        <li><span className={"font-semibold"}>Food for all cravings</span> - From local fare to
                            restaurant
                            favourites, our wide selection of food will definitely satisfy all your cravings.
                        </li>
                        <li><span className={"font-semibold"}>Pay with ease</span> - It’s easy to get your meals
                            delivered
                            to you. It’s even easier to pay for it with GrabPay.
                        </li>
                        <li><span className={"font-semibold"}>More Rewarding</span> - earn GrabRewards points for every
                            order you make and use them to redeem more goodies.
                        </li>
                    </ul>
                </div>
                {/*    FAQ    */}
                <div className={"container mx-auto"}>
                    <h1 className={"text-4xl my-12 font-bold"}>Frequently Asked Questions</h1>
                    <p className={"text-2xl font-bold mb-4"}>What is GrabFood?</p>
                    <p className={"text-sm tracking-wide"}>
                        GrabFood is the fastest Food Delivery service in Indonesia. We have curated all your favorite
                        dishes, restaurants, and cuisines to help you grab your food in the easiest & quickest way
                        possible.
                        Find and order your favorite cuisines across Indonesia - order food online in just a few taps,
                        from
                        Thick Toast - Menteng for Breakfast, Mie Aceh Pandrah - Sawah Besar for Lunch, Ochim's Diner -
                        Cikini for Dinner! We are here to satisfy your hunger with a wide selection of merchant partners
                        in
                        Indonesia.
                    </p>
                    <button
                        className={"w-full p-3 rounded-lg border text-sm font-semibold border-gray-400 my-8 text-gray-500 hover:text-custom-green hover:border-custom-green"}>Read
                        More
                    </button>
                </div>
            </div>
            {/*    Section Download   */}
            <div className={"bg-gray-200"}>
                <div className={"grid grid-cols-1 md:grid-cols-2 place-items-center py-12"}>
                    <div className={"w-1/2 flex flex-col items-center h-auto"}>
                        <img src={"https://food.grab.com/static/page-home/bottom-food-options.svg"} width={"150"}
                             className={"place-content-start"} alt={"curated restaurant"}/>
                        <h3 className={"font-semibold my-2"}>Curated restaurants</h3>
                        <p className={"text-sm"}>
                            From small bites to big meals, we won't limit your appetite. Go ahead and order all you
                            want.</p>
                    </div>
                    <div className={"w-1/2 flex flex-col items-center h-auto"}>
                        <img src={"https://food.grab.com/static/images/ilus-cool-features-app.svg"} width={"150"}
                             className={""} alt={"download"}/>
                        <h3 className={"font-semibold my-2"}>More cool features available on the app</h3>
                        <p className={"py-2 text-sm"}>
                            Download Grab app to use other payment methods and enjoy seamless communication with your
                            driver.</p>
                        <div className={"grid grid-cols-2 justify-center"}>
                            <img src="https://food.grab.com/static/images/logo-appstore.svg" alt="Appstore" srcset=""
                                 width={"128"}/>
                            <img src="https://food.grab.com/static/images/logo-playstore.svg" alt="Google Play"
                                 srcset="" width={"128"}/>
                        </div>
                    </div>
                </div>
            </div>

            {/*    More Information   */}
            <div className={"bg-gray-300"}>
                <div className={"container flex place-content-between mx-auto"}>
                    <div className={"py-6"}>
                        <img src="https://food.grab.com/static/images/logo-grabfood-mono.svg" alt=""/>
                    </div>
                    <div className={"py-6"}>
                        <p>
                            EN
                        </p>
                    </div>
                </div>

                <div className="relative flex py-4 items-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    {/*<span className="flex-shrink mx-4 text-gray-400"></span>*/}
                    <div className="flex-grow border-t border-gray-400"></div>
                </div>
                {/*Grid 4 Column*/}
                <div className="grid grid-cols-1 md:grid-cols-4 mx-auto container pb-6">
                    <div className="col">
                        <h5 className={"font-semibold"}>Frequently Searched</h5>
                        <p className={"text-sm"}>
                            Burger King Menu<br/>
                            Chatime Menu <br/>
                            Domino's Pizza Menu <br/>
                            Hokben Menu <br/>
                            JCO Delivery <br/>
                            KFC Menu <br/>
                            McDonalds Menu <br/>
                            Pizza Hut Delivery <br/>
                            Richeese Menu <br/>
                            Menu Solaria <br/>
                            Starbucks Menu <br/>
                            Yoshinoya Menu <br/>
                        </p>
                    </div>
                    <div className="col">
                        <h5 className={"font-semibold accordion"}>Popular Cuisines</h5>
                        <p className={"text-sm"}>
                            Chinese Food <br/>
                            Fast Food <br/>
                            Indian Food <br/>
                            Indonesian Food <br/>
                            Italian Food <br/>
                            Japanese Food <br/>
                            Korean Food <br/>
                            Thai Food <br/>
                            Vietnamese Food <br/>
                        </p>
                    </div>
                    <div className="col">
                        <h5 className={"font-semibold accordion"}>About Grab</h5>
                        <p className={"text-sm"}>About Grab <br/>
                            About GrabFood <br/>
                            Blog<br/></p>
                    </div>
                    <div className="col">
                        <h5 className={"font-semibold accordion"}>Support</h5>
                        <p className={"text-sm"}>Help <br/>
                            FAQs<br/>
                            Be a GrabFood Merchant <br/>
                            Drive With Grab<br/></p>
                    </div>

                </div>

                {/*    Footer     */}
                <div className={"bg-gray-600 text-white"}>
                    <div className={"container mx-auto"}>
                        <div className={"grid grid-cols-1 md:grid-cols-2 py-6"}>
                            <div
                                className={"flex flex-wrap place-content-center md:place-content-start text-center md:text-left"}>
                                <p>Countries with Grabfood</p>
                                <p>Indonesia | Philippines | Thailand | Vietnam | Singapore | Malaysia | Myanmar</p>

                            </div>
                            <div className={"flex items-start place-content-center md:place-content-end py-4"}>
                                <img src={facebook} width={"24"} className={""} alt={"facebook"}/>
                                <img src={instagram} width={"24"} className={"mx-2"} alt={"instagram"}/>
                                <img src={twitter} width={"24"} className={""} alt={"twitter"}/>
                            </div>
                        </div>

                        {/*    Section Last*/}

                        <div className={"grid grid-cols-1 items-center md:grid-cols-2"}>
                            <div className={"font-normal text-center md:text-left"}>
                                <p className={""}>© Grab 2022</p>
                                <p>Terms of Service • Privacy Policy</p>
                            </div>
                            <div>
                                <div className={"flex place-content-center md:place-content-end items-start py-4"}>

                                    <img src="https://food.grab.com/static/images/logo-appstore.svg" alt="Appstore"
                                         srcSet="" width={"128"}/>
                                    <img src="https://food.grab.com/static/images/logo-playstore.svg"
                                         alt="Google Play" srcSet="" width={"128"}/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Information;