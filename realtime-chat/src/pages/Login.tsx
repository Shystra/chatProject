import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { CardWrapper } from "../components/CardWrapper";
import { TextRedirect } from "../components/TextRedirect";

import { useForm } from "react-hook-form";

interface ILoginProps {
    email: string;
    password: string;
}

export function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILoginProps>();

    const submitForm = (data: any) => {
        console.log("🚀 ~ file: Login.tsx:21 ~ submitForm ~ data:", data)
    }

    return (
        <>

            <div className="bg-blue h-screen flex items-center justify-center ">
                <CardWrapper title="Faça o Login">
                    <form onSubmit={handleSubmit(submitForm)}>
                        <Input
                            placeholder="Email"
                            {...register('email', { required: true })}

                        />
                        <Input
                            placeholder="Senha"
                            {...register('password', { required: true })}

                        />
                        {errors.email && <span>Campo de email é obrigatório</span>}
                        {errors.password && <span>Campo de senha é obrigatório</span>}

                        <Button />
                    </form>

                    <TextRedirect
                        text="Não tem conta?"
                        link="/register"
                        textRedirect="Cadastre-se" />
                </CardWrapper>
            </div>

        </>
    )
}