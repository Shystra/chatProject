import { ListContacts } from "../components/Home/ListContacts";
import { Header } from "../components/Home/Header";
import { MessageToUser } from "../components/Home/MessageToUser";
import { MessageFromUser } from "../components/Home/MessageFromUser";
import { Footer } from "../components/Home/Footer";
import { NavBar } from "../components/Home/NavBar";

export function Home() {
    return (
        <div className="flex w-full">
            <div className="w-1/2 overflow-y-scroll h-screen">
                <NavBar />
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
            <div className="w-1/2 bg-blue-50 h-screen flex flex-col">

                <Header />

                <div className=" flex flex-col h-full overflow-y-scroll">

                    <MessageToUser />
                    <MessageFromUser />
                    <MessageToUser />
                    <MessageFromUser />
                    <MessageToUser />
                    <MessageFromUser />
                    <MessageToUser />
                    <MessageFromUser />
                    <MessageToUser />
                    <MessageFromUser />
                    <MessageToUser />
                    <MessageFromUser />
                    <MessageToUser />
                    <MessageFromUser />
                    <MessageToUser />
                    <MessageFromUser />
                    <MessageToUser />
                    <MessageFromUser />
                </div>

                <Footer />

            </div>
        </div>
    )
}