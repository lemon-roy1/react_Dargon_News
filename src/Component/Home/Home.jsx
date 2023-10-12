import Heaber from "../Shared/Header/Heaber";
import LeftSideNav from "../Shared/LiftSideNav.jsx/LeftSideNav";
import Navber from "../Shared/Navber";
import RigthSideNav from "../Shared/RightSideNav/RigthSideNav";
import BreakNews from "./BreakNews";


const Home = () => {
    return (
        <div>
            <Heaber/>
            <BreakNews/>
           <Navber/>
            <h2 className="text-xl font-bold">All Caterogy</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav/>
                </div>
                <div className="col-span-2">
                     <h2 className="text-2xl">this is medil page</h2>
                </div>
                <div>
                    <RigthSideNav/>
                </div>
            </div>
        </div>
    );
};

export default Home;