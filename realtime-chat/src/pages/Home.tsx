import { ListContacts } from "../components/Home/ListContacts";

export function Home () {
    return(
        <div className="grid grid-cols-12">
            <div className="sm:col-span-4">
                <ListContacts/>
            </div>
            <div className="sm:col-span-8 col-span-12 bg-slate-600">
                esquerda
            </div>
        </div>
    )
}