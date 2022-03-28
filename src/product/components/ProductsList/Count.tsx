import { Text } from "@chakra-ui/react";
import React from "react";

interface Props{
    current: number;
    total: number;
}

const Count: React.FC<Props> = ({current, total}) => {
    return(
        <Text color="gray.500" fontWeight="bold">
            {current} of {total} products
        </Text>
    )
}

export default Count;