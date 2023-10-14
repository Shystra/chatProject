import { ForwardRefRenderFunction, forwardRef } from "react";

interface IInputProps {
    placeholder: string
    // onChange?: (e: ChangeEvent) => void;
}


const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInputProps> = ({ placeholder, ...rest }, ref) => {
    return (
        <div className="mb-4">
            <input
                type="text"
                ref={ref}
                {...rest}
                placeholder={placeholder}
                className="w-full px-4 py-2 rounded border border-neutral-200"
            />
        </div>
    );
};

export const Input = forwardRef(InputBase)




// export function Input ({placeholder}: IInputProps) {
//     return (
//         <div className="mb-4">
//             <input
//             type="text"
//             placeholder={placeholder}
//             className="w-full px-4 py-2 rounded border border-neutral-200"/>
//         </div>
//     )
// }