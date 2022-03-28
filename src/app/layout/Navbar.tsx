import { Stack, Box, Container, Text, Image } from "@chakra-ui/react";
import React from "react";
import logo from '~/assets/logo.svg';
import coin from "~/assets/icons/coin.svg";
import { usePoints, useUser } from "~/user/hooks";

const Navbar: React.FC =()=>{
    const[points, addPoints] = usePoints();
    const user = useUser();

    return(
        <Box backgroundColor="white" boxShadow="md">
            <Container maxWidth="6xl">
                <Stack alignItems="center" as="nav" paddingY={3} direction="row" justifyContent="space-between">
                    <Image src={logo} height={8} width="8"/>
                    <Stack alignItems="center" spacing={3} direction="row" color="gray.500">
                        <Text> {user.name} </Text>
                        <Stack backgroundColor="gray.100" direction="row" cursor="pointer" alignItems="center" borderRadius={999} paddingY={2} paddingX={3} onClick={() => addPoints(1000)}>
                            <Text fontWeight="500"> {points} </Text>
                            <Image src={coin} height={6} width={6}/>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}

export default Navbar;