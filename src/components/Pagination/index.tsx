import { Stack,Box } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination(){
  return (
    <Stack
      direction="row"
      spacing="6"
      marginTop="8"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <Stack direction="row">
        <PaginationItem isCurrent number="1" />
        <PaginationItem number="2" />
        <PaginationItem number="3" />
        <PaginationItem number="4" />
        <PaginationItem number="5" />
        <PaginationItem number="6" />
      </Stack>
    </Stack>
  )
}
