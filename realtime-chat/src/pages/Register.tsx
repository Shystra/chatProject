import { Button } from "../components/Button";
import { CardWrapper } from "../components/CardWrapper";
import { Input } from "../components/Input";
import { TextRedirect } from "../components/TextRedirect";


export function Register (){
    return (
        <>
            
            <div className="bg-blue h-screen flex items-center justify-center ">
                <CardWrapper title="Faça o Cadastro">
                    <Input placeholder="Nome"/>
                    <Input placeholder="Email"/>,
                    <Input placeholder="Senha"/>
                    <Button />

                    <TextRedirect 
                    text="Não tem conta?" 
                    link="/" 
                    textRedirect="Login"/>
                </CardWrapper>
            </div>
        
        </>
    )
}