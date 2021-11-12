import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

type ProfileProps = {
  showProfileData?: boolean;
}
export function Profile({ showProfileData = true }:ProfileProps){
  return (
    <Flex
      alignItems="center"
    >
      {showProfileData && <Box marginRight="4" textAlign="right">
        <Text>Brendo Vale</Text>
        <Text color="gray.300" fontSize="small">
          brendo@moveeup.com
        </Text>
      </Box>
      }
      <Avatar size="md" name="Brendo Vale" src="https://github.com/bvaledev.png"/>
    </Flex>
  )
}
