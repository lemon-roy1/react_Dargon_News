import { useLoaderData } from "react-router-dom";
import Heaber from "../Shared/Header/Heaber";
import LeftSideNav from "../Shared/LiftSideNav.jsx/LeftSideNav";
import Navber from "../Shared/Navber";
import RigthSideNav from "../Shared/RightSideNav/RigthSideNav";
import BreakNews from "./BreakNews";
import NewsCart from "./NewsCart";




const Home = () => {
    const news = useLoaderData()

    return (
        <div>
            <Heaber />
            <BreakNews />
            <Navber />
       
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav />
                </div>
                <div className="col-span-2">
                    <h3 className="text-xl leading-7 font-semibold mt-5"> Dragon News Home</h3>
                    {
                        news.map(aNews => <NewsCart key={aNews._id}
                            aNews={aNews}
                        ></NewsCart>
                        )
                    }
                </div>
                <div>
                    <RigthSideNav />
                </div>
            </div>
        </div>
    );
};

export default Home;