import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import LeftSideCart from "./LeftSideCard/LeftSideCart";


const LeftSideNav = () => {
    const [catagories, setCatagories] = useState([])

    useEffect(() => {
        fetch('/public/data/categories.json')
            .then(res => res.json())
            .then(data => setCatagories(data))

    }, [])
    return (
        <div>
            <div className="m-4 mb-3" >
                <button className="btn leading-8 w-full font-semibold text-[#403F3F] bg-[#F3F3F3]">National News</button>

                <div className="space-y-6 mt-3">
                    {
                        catagories.map(category => <Link
                            className="block ml-16 text-xl font-semibold"
                            to={`/category/${category.id}`}
                           key={category.id}>
                            {category.name}
                        </Link>)
                    }
                </div>
                <div>
                    <LeftSideCart/>
                </div>


            </div>
        </div>
    );
};

export default LeftSideNav;