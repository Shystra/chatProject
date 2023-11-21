import { useEffect } from 'react';
import dwaitImage from '../../assets/dwait.jpg';
import { api } from '../../server/api';


export function NavBar() {
    useEffect(() => {
        handleSearch();
    }, [])

    
    const handleSearch = async () => {
    try {
        const response = await api.get('/users')      
    } catch (error) {
        console.log("🚀 ~ file: NavBar.tsx:16 ~ handleSearch ~ error:", error)     
    }
    
    }

    return (
        <div className='flex items-center bg-blue-50 p-4 justify-between'>
            <div className='flex items-center'>
            <img
                src={dwaitImage}
                alt=""
                className="rounded-full w-[40px] h-[40px]"
            />
            </div>

            <p className='text-sm ml-2'>Dwaite(Você)</p>
            <input 
            type="email" 
            placeholder='digite o email...' 
            className='bg-white rounded px-3 py-1' 
            />
            <p>Sair</p>
        </div>
    )
} 