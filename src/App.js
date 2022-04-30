import './App.css';
import Navigation from "./components/navigation/Navigation";
import Header from "./components/header/Header";
import Promotion from "./components/promotion/Promotion";
import {useState} from "react";
import {dummyPromo} from "./data/dummyPromo";
import Category from "./components/category/Category";
import {dummyCategory} from "./data/dummyCategory";
import Information from "./components/information/Information";

export default App;

function App() {
    const [promos, setPromos] = useState(dummyPromo)
    const [categorys, setCategorys] = useState(dummyCategory)
    return (
        <div className={"setbg bg-local bg-center bg-cover h-96"}>
            <Navigation />
            <Header />
            <Promotion promos={promos} />
            <Category categorys={categorys} />
            <Information />
        </div>
);
}
