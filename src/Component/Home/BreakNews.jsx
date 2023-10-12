import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const BreakNews = () => {
    return (
        <div className="flex">
            <button className="btn bg-[#D72050]">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link className="mr-12  text-[#051220] " to='/'> Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as ....</Link>
                <Link className="mr-12 text-[#051220] " to='/'> Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as ....</Link>
                <Link className="mr-12 text-[#051220] " to='/'> Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as ....</Link>
                <Link className="mr-12 text-[#051220] " to='/'> Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as ....</Link>
            </Marquee>
        </div>
    );
};

export default BreakNews;