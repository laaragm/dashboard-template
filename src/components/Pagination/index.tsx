import { Box, Stack } from "@chakra-ui/react";

import { PaginationItem } from "./PaginationItem";

export function Pagination() {
    return (
        <Stack
            direction="row"
            mt="8"
            justify="space-between"
            align="center"
            spacing="6"
        >
            <Box>
                <strong>0</strong> - <strong>10</strong> out of{" "}
                <strong>30</strong>
            </Box>
            <Stack direction="row" spacing="2">
                <PaginationItem pageNumber={1} isCurrentPage />
                <PaginationItem pageNumber={2} />
                <PaginationItem pageNumber={3} />
            </Stack>
        </Stack>
    );
}
