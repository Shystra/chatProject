import { useForm } from "react-hook-form";
import { Button } from "../components/Form/Button";
import { CardWrapper } from "../components/Form/CardWrapper";
import { Input } from "../components/Form/Input";
import { TextRedirect } from "../components/Form/TextRedirect";

interface IRegisterProps {
    name: string;
    email: string;
    password: string;
};

export function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },

    } = useForm<IRegisterProps>();

    const submitForm = (data: IRegisterProps) => {
        console.log("🚀 ~ file: Register.tsx:22 ~ submitForm ~ data:", data)
    };
    return (
        <>

            <div className="bg-blue h-screen flex items-center justify-center ">
                <CardWrapper title="Faça o Cadastro">
                    <form onSubmit={handleSubmit(submitForm)}>
                        <Input
                            placeholder={"Nome"}
                            {...register('name', { required: true })}
                        />

                        <Input
                            placeholder="Email"
                            {...register('email', { required: true })}
                        />
                        <Input
                            placeholder="Senha"
                            {...register('password', { required: true })}
                        />
                        {errors.name && <span>Campo de nome é obrigatório</span>}
                        {errors.email && <span>Campo de email é obrigatório</span>}
                        {errors.password && <span>Campo de senha é obrigatório</span>}
                        <Button />
                    </form>






                    <TextRedirect
                        text="Não tem conta?"
                        link="/"
                        textRedirect="Login" />
                </CardWrapper>
            </div>

        </>
    )
}