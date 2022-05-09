import './App.css';
import Navigation from "./components/navigation/Navigation";
import Header from "./components/header/Header";
import Promotion from "./components/promotion/Promotion";
import {useState} from "react";
import {dataPromo} from "./data/DataPromo";
import Category from "./components/category/Category";
import {dataCategory} from "./data/DataCategory";
import Information from "./components/information/Information";

export default App;

function App() {
    const [promos] = useState(dataPromo)
    const [categorys] = useState(dataCategory)
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
