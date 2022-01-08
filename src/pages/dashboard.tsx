import dynamic from "next/dynamic";
import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
});

const options = {
    chart: {
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
        foreColor: theme.colors.gray[500],
    },
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    toolTip: {
        enabled: false,
    },
    xaxis: {
        type: "datetime",
        axisBorder: {
            color: theme.colors.gray[600],
        },
        axisTicks: {
            color: theme.colors.gray[600],
        },
        categories: [
            "2022-01-07T00:00:00.000Z",
            "2022-01-08T00:00:00.000Z",
            "2022-01-09T00:00:00.000Z",
            "2022-01-10T00:00:00.000Z",
            "2022-01-11T00:00:00.000Z",
            "2022-01-12T00:00:00.000Z",
            "2022-01-13T00:00:00.000Z",
            "2022-01-14T00:00:00.000Z",
            "2022-01-15T00:00:00.000Z",
            "2022-01-16T00:00:00.000Z",
        ],
    },
    fill: {
        opacity: 0.3,
        type: "gradient",
        gradient: {
            shade: "dark",
            opacityFrom: 0.7,
            opacityTo: 0.3,
        },
    },
};

const generateData = () => {
    const numbers = [];
    while (numbers.length !== 10) {
        numbers.push(Math.floor(Math.random() * 100) + 1);
    }

    return numbers;
};

const series = [{ name: "series1", data: generateData() }];

export default function Dashboard() {
    return (
        <Flex direction="column" h="100vh">
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <SimpleGrid
                    flex="1"
                    gap="4"
                    minChildWidth="20rem"
                    align="flex-start"
                >
                    <Box
                        p="8"
                        backgroundColor="gray.800"
                        borderRadius={8}
                        pb="4"
                    >
                        <Text fontSize="lg" mb="4">
                            Subscribers of the week
                        </Text>
                        <Chart
                            type="area"
                            height={160}
                            // @ts-ignore
                            options={options}
                            series={series}
                        />
                    </Box>
                    <Box p="8" bg="gray.800" borderRadius={8}>
                        <Text fontSize="lg" mb="4">
                            Opening rate
                        </Text>
                        <Chart
                            type="area"
                            height={160}
                            // @ts-ignore
                            options={options}
                            series={series}
                        />
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    );
}
