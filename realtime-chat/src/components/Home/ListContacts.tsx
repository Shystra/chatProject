import dwaitImage from '../../assets/dwait.jpg';

export function ListContacts() {
    return (

        <div className="flex p-4 justify-between shadow-sm items-center rounded-lg cursor-pointer hover:bg-gray-50">
            <div className='flex items-center'>
            <div className="relative">
                        <img 
                        src={dwaitImage} 
                        alt=""
                        className="rounded-full w-[60px] h-[60px]"
                        />
                        <div className='bg-green right-0 bottom-0 absolute w-[14px] h-[14px] rounded-full'></div>
                    </div>
                    
                    <div className='ml-4'>
                        <p className='text-normal text-black font-semibold'>Name</p>
                        <p className='text-sm text-gray-200'>Message</p>
                    </div>
                </div>
                <div className='flex flex-col items-center text-center'>
                    <span className='text-sm text-gray-200'>10:58 AM</span>
                    <div className='w-[20px] h-[20px]  rounded-full bg-blue flex items-center'>
                        <span className='text-white text-center w-full text-[10px]'>1</span>
                    </div>
                </div>

        </div>

    )
}