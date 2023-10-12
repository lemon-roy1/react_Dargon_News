import moment from 'moment/moment';
import img1 from '../../../../assets/1.png'
import img2 from '../../../../assets/2.png'
import img3 from '../../../../assets/3.png'
import { CiCalendar } from "react-icons/ci";

const LeftSideCart = () => {

    return (
        <div>
            <div className="card glass mb-3">
                <figure><img src={img1} alt="card" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Life hack</h2>
                    <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div className='flex gap-2 w-full items-center'>
                        <h2 className='font-medium text-lg'>Sports</h2>
                            <CiCalendar className='text-lg text-[#9F9F9F]'/>
                        <p className='text-sm text-[#9F9F9F]'>{moment().format('ll')}</p>
                    </div>
                </div>
            </div>
            <div className="card glass mb-3">
                <figure><img src={img2} alt="card" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Life hack</h2>
                    <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div className='flex gap-2 w-full items-center'>
                        <h2 className='font-medium text-lg'>Sports</h2>
                            <CiCalendar className='text-lg text-[#9F9F9F]'/>
                        <p className='text-sm text-[#9F9F9F]'>{moment().format('ll')}</p>
                    </div>
                </div>
            </div>
            <div className="card glass">
                <figure><img src={img3} alt="card" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Life hack</h2>
                    <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div className='flex gap-2 w-full items-center'>
                        <h2 className='font-medium text-lg'>Sports</h2>
                            <CiCalendar className='text-lg text-[#9F9F9F]'/>
                        <p className='text-sm text-[#9F9F9F]'>{moment().format('ll')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSideCart;