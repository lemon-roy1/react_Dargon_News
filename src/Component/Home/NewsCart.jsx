
import { BiBookmark, BiShareAlt,BiSolidStarHalf,BiSolidStar } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";

/* eslint-disable react/prop-types */
const NewsCart = ({ aNews }) => {
    const { name, published_date } = aNews.author;
    const { thumbnail_url, image_url, details,rating,total_view } = aNews;



    return (
        <div className="border mb-7 rounded">
            <div className="w-[35rem] h-[6rem] bg-[#F3F3F3] flex justify-between items-center gap-4">

                <div className="flex gap-5 justify-end p-3">
                    <div>
                        <img src={thumbnail_url} alt="" className="w-[3rem] rounded-full" />
                    </div>
                    <div>
                        <p>
                            {aNews.author.name ? <p>{name}</p> : <p>Daniel Deangelo</p>}
                        </p>
                        <p>{aNews.author.published_date ? <p>{published_date}</p> : <p> 20-10-2023</p>}</p>
                    </div>
                </div>
                <div className="flex gap-2 p-3">
                    <BiBookmark></BiBookmark>
                    <BiShareAlt></BiShareAlt>
                </div>

            </div>
            <div className="px-10 mb-5">
                <h2 className="text-xl leading-9 font-bold">Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h2>
            </div>
            <div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10">
                        <img src={image_url} alt="Shoes" className="rounded-xl" />
                    </figure>

                    <div className="px-10 mt-2">
                        <p>{details} </p>
                        <p className="text-[20px] text-[#FF8C47]">Read More</p>
                        <hr className="w-full mb-5 mt-5" />

                        <div className=" flex justify-between p-3 mb-5">
                        <div className="flex gap-2">
                            <BiSolidStar className="text-[20px] text-[#FF8C47]"></BiSolidStar>
                            <BiSolidStar className="text-[20px] text-[#FF8C47]"></BiSolidStar>
                            <BiSolidStar className="text-[20px] text-[#FF8C47]"></BiSolidStar>
                            <BiSolidStarHalf className="text-[20px] text-[#FF8C47]"></BiSolidStarHalf>
                            <BiSolidStarHalf className="text-[20px] text-[#FF8C47]"></BiSolidStarHalf>
                            <h2 className="text-[16px]">{rating.number}</h2>
                        </div>
                        <div className="flex gap-2">
                            <AiFillEye className="text-[1.5rem]"></AiFillEye>
                            <h2 className="text-[16px]">{total_view}</h2>
                        </div>
                    </div>
                    </div>
                    

                </div>
            </div>
        </div>
    );
};

export default NewsCart;