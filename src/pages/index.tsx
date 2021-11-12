import { Flex, Button, Stack } from '@chakra-ui/react'
import {useForm, SubmitHandler} from 'react-hook-form'
import {Input} from '../components/Form/Input'

type SignInFormData = {
  email: string;
  password: string;
}

export default function SignIn() {
  const {register, handleSubmit, formState} = useForm()

  const handleSignIn: SubmitHandler<SignInFormData> = async (data, event) => {
    await new Promise(resolve => setTimeout(resolve, 5000))
    event.preventDefault()
    console.log(data)
  }

  return (
    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        backgroundColor="gray.800"
        padding="8"
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <Input type="email" error={formState?.errors?.email} name="email" label="E-mail" {...register('email', {required: 'E-mail obrigatório'})}/>
          <Input type="password" error={formState?.errors?.password} name="password" label="Senha" {...register('password', {required: 'Senha obrigatória'})}/>
        </Stack>

        <Button
          type="submit"
          marginTop="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >Entrar</Button>
      </Flex>
    </Flex>
  )
}
