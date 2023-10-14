import dwaitImage from '../../assets/dwait.jpg';

export function Header (){
    return (
        <header className="flex items-center px-4 py-8 border-gray-100 bg-blue-300">
        <div className="relative mr-3">
            <img
                src={dwaitImage}
                alt=""
                className="rounded-full w-[60px] h-[60px]"
            />
            <div className='bg-green right-0 bottom-0 absolute w-[14px] h-[14px] rounded-full'></div>
        </div>

        <div>
            <p className="text-zinc-800 font-semibold text-normal">Name User</p>
            <p className="text-neutral-400 text-sm font-light truncate">Online</p>
        </div>
    </header>
    )
}