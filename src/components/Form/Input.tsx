import { ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";
import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    forwardRef,
    Input as ChakraInput,
    InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
    { name, label, error = null, ...remainingProps },
    ref
) => {
    return (
        <FormControl isInvalid={!!error}>
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput
                id={name}
                ref={ref}
                name={name}
                focusBorderColor="pink.500"
                bgColor="gray.900"
                variant="filled"
                size="lg"
                _hover={{ bgColor: "gray.900" }}
                {...remainingProps}
            />

            {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </FormControl>
    );
};

export const Input = forwardRef(InputBase);
