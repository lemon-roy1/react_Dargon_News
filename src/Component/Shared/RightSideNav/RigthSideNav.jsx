import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"
import bgimg from "../../../assets/bg1.png"
// import { FcGoogle } from "react-icons/fi"
import { BiLogoGoogle } from "react-icons/bi";
import { FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const RigthSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-2xl font-bold ">Login with</h2>
                <button className="btn mt-4 text-[#58A7DE] w-full"> <BiLogoGoogle className="w-10 h-9 text-[#58A7DE]"></BiLogoGoogle> Login with google</button>
                <button className="btn mt-4 text-[#403F3F] w-full"> <FaGithub className="w-10 h-9 "></FaGithub> Login with github</button>
            </div>
            <div className="p-4 mb-6">
                <h2 className="text-2xl font-bold mb-4">Find Us On</h2>
                <a className="p-4 flex w-full border rounded-t-lg">
                    <FaFacebook className="w-10 h-7 mr-3" ></FaFacebook>
                    <h2 className="text-lg">Facebook</h2>
                </a>
                <a className="p-4 flex w-full border-x ">
                    <FaTwitter className="w-10 h-7 mr-3 text-[#58A7DE]" ></FaTwitter>
                    <h2 className="text-lg">Twitter</h2>
                </a>
                <a className="p-4 flex w-full border rounded-b-lg">
                    <FaInstagram className="w-10 h-7 mr-3 text-[#FBA756]" ></FaInstagram>
                    <h2 className="text-lg">Instagram</h2>
                </a>
            </div>
            <div className="p-4 mb-6 bg-[#F3F3F3] rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Q-zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
            <div className="p-4 mb-6 bg-[#F3F3F3] rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Q-zone</h2>
                <div className="card bg-base-100 shadow-xl image-full">
                    <figure><img src={bgimg} alt="img" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold m-4">Create an Amazing Newspaper</h2>
                        <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-[#D72050] w-full">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RigthSideNav;