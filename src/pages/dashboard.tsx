import {Flex, Box, SimpleGrid, Text, theme} from '@chakra-ui/react'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

import { Header } from "../components/Header";
import { Sidebar } from '../components/Sidebar';

const options = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-03-01T00:00:00.000Z',
      '2021-03-05T00:00:00.000Z',
      '2021-03-10T00:00:00.000Z',
      '2021-03-15T00:00:00.000Z',
      '2021-03-20T00:00:00.000Z',
      '2021-03-25T00:00:00.000Z',
      '2021-03-30T00:00:00.000Z',
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
}

const series = [
  {
    name: 'series 1', data: [21,120,51,10,180, 150,200]
  }
]

export default function Dashboard(){
  return (
    <Flex direction="column" height="100vh">
      <Header />

      <Flex
        width="100%"
        maxWidth="1488"
        marginY="6"
        marginX="auto"
        paddingX="6"
      >

        <Sidebar/>
        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box
            padding="8"
            background="gray.800"
            borderRadius={8}
            paddingBottom="4"
          >
            <Text fontSize="lg" marginBottom="4" >Inscritos da Semana</Text>

            <Chart
              options={options}
              series={series}
              type="area"
              height={160}
            />
          </Box>

          <Box
            padding="8"
            background="gray.800"
            borderRadius={8}
            paddingBottom="4"
          >
            <Text fontSize="lg" marginBottom="4" >Taxa de abertura</Text>
            <Chart
              options={options}
              series={series}
              type="area"
              height={160}
            />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
