import { Button, ButtonProps } from "@chakra-ui/react";

type PaginationItemProps = ButtonProps & {
  number: string;
  isCurrent?: boolean;
}

export function PaginationItem({number,isCurrent = false, ...rest}: PaginationItemProps){

  if(isCurrent){
    return (
      <Button
        size="sm"
        fontSize="xs"
        colorScheme="pink"
        disabled
        _disabled={{
          backgroundColor: 'pink.500',
          cursor: 'default'
        }}
        {...rest}
      >
        {number}
      </Button>
    )
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      backgroundColor="gray.700"
      _hover={{
        backgroundColor: 'gray.500',
        cursor: 'pointer'
      }}
      {...rest}
      >
        {number}
      </Button>
  )
}
