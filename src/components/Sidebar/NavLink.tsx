import { Text, Link as ChakraLink, LinkProps, Icon } from '@chakra-ui/react'
import { ElementType } from 'react'
import {ActiveLink} from '../ActiveLink'

type NavLinkProps = LinkProps & {
  href: string;
  icon: ElementType;
  title: string;
}

export function NavLink({icon, title, href, ...rest}:NavLinkProps){
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text marginLeft="4" fontWeight="medium">{title}</Text>
      </ChakraLink>
    </ActiveLink>
  )
}
