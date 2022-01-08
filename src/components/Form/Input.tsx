import { ForwardRefRenderFunction } from "react";
import {
    FormControl,
    FormLabel,
    forwardRef,
    Input as ChakraInput,
    InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
    name: string;
    label: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
    { name, label, ...remainingProps },
    ref
) => {
    return (
        <FormControl>
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput
                id={name}
                ref={ref}
                name={name}
                type="password"
                focusBorderColor="pink.500"
                bgColor="gray.900"
                variant="filled"
                size="lg"
                _hover={{ bgColor: "gray.900" }}
                {...remainingProps}
            />
        </FormControl>
    );
};

export const Input = forwardRef(InputBase);
