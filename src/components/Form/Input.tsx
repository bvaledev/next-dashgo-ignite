import { Flex, Input as ChakraInput, InputProps as ChakraInputProps, Button, Stack, FormLabel, FormControl, FormErrorMessage } from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction  } from 'react'
import {FieldError} from 'react-hook-form'

type InputProps = ChakraInputProps & {
  name: string;
  label?: string;
  error?: FieldError;
}

export const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({name, label,error, ...rest}, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }
      <ChakraInput
        id={name}
        name={name}
        focusBorderColor="pink.500"
        backgroundColor="gray.900"
        variant="filled"
        _hover={{
          backgroundColor: 'gray.900'
        }}
        size="lg"
        ref={ref}
        {...rest}
        />
      { !!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)
