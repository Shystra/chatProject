import send from '../../assets/20.png';

export function Footer() {
    return (
        <>

            <footer className="relative w-full bottom-0 bg-blue-300 h-24 flex items-center rounded-lg">
                <input 
                type="text" 
                placeholder="Digite aqui sua mensagem..." 
                className="w-full px-5 py-4 rounded-lg bg-white mx-3"
                />
                <i aria-hidden="true" className='absolute right-10'>
                    <img src={send} alt=""/>
                </i>
            </footer>

        </>
    )
}