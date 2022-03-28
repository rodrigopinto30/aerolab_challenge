import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Filter } from "./types";

interface Props{
    active: Filter
    onChange: (filter: Filter) => void
}

const FILTERS: Filter[] = [Filter.MostRecent, Filter.LowestPrice, Filter.HighestPrice];


const Filters: React.FC<Props> = ({active, onChange}) =>{
    return(
        <Stack alignItems="center" direction="row" spacing={6}>
            <Text color="gray.500">Sort by:</Text>
            <Stack direction="row" spacing={4}>
                {FILTERS.map((filter)=>(
                    <Box 
                        key={filter}
                        backgroundColor={filter === active ? "orange.500" : "gray.100"}
                        color={filter === active ? "white" : "gray.600"}
                        borderRadius={999}
                        fontWeight="500"
                        cursor="pointer"
                        paddingY={2}
                        paddingX={6}
                        onClick={()=> onChange(filter)}
                    > 
                        {filter}
                    </Box>
    ))}
            </Stack>
        </Stack>
    );
}

export default Filters; 