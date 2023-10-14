import { ListContacts } from "../components/Home/ListContacts";
import { Header } from "../components/Home/Header";
import { MessageToUser } from "../components/Home/MessageToUser";
import { MessageFromUser } from "../components/Home/MessageFromUser";
import { Footer } from "../components/Home/Footer";

export function Home() {
    return (
        <div className="grid grid-cols-12">
            <div className="sm:col-span-4 col-span-12 overflow-y-scroll h-screen">
                <ListContacts />
                <ListContacts />
                <ListContacts />
                <ListContacts />
                <ListContacts />
                <ListContacts />
                <ListContacts />
                <ListContacts />
                <ListContacts />
                <ListContacts />
                <ListContacts />
                <ListContacts />
             
            </div>
            <div className="sm:col-span-8 col-span-12 bg-blue-50 h-screen flex flex-col">
                
            <Header/>

                <div className=" flex flex-col h-full overflow-y-scroll">
                    <MessageToUser/>
                    <MessageFromUser/>
                    <MessageToUser/>
                    <MessageFromUser/>
                    <MessageToUser/>
                    <MessageFromUser/>
                    <MessageToUser/>
                    <MessageFromUser/>
                    <MessageToUser/>
                    <MessageFromUser/>
                    <MessageToUser/>
                    <MessageFromUser/>
                    <MessageToUser/>
                    <MessageFromUser/>
                    <MessageToUser/>
                    <MessageFromUser/>
                    <MessageToUser/>
                    <MessageFromUser/>
                </div>
                
                <Footer/>

            </div>
        </div>
    )
}