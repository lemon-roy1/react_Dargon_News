import moment from "moment/moment";
import logo from "../../../assets/logo.png"
const Heaber = () => {
    return (
        <div className="text-center m-5">
            <img className="mx-auto " src={logo} alt="" />
            <p className="text-xl leading-8 font-normal">Journalism Without Fear or Favour</p>
            <p className="text-xl font-medium">{moment().format("dddd, MMMM D, YYYY, h:mm a")}</p>
        </div>
    );
};

export default Heaber;