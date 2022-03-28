import { CircularProgress, Flex, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import api from "~/product/api";
import { Product } from "~/product/types";
import header from '~/assets/header.png';
import ProductsList from "~/product/components/ProductsList";

const HomeScreen: React.FC = () =>{
    const [products, setProducts]= React.useState<Product[]>([]);
    const [status, setStatus] = React.useState<'pending' | "rejected" | "resolved">("pending");

    React.useEffect(()=>{
        api.list().then((products)=>{
            setProducts(products);
            setStatus("resolved");
        });
    }, []);

    if(status === "pending"){
        return(
            <Flex alignItems="center" justifyContent="center" paddingY={12}>
                <CircularProgress isIndeterminate color="orange"/>
            </Flex>
        );
    }

    return(
        <Stack flex={1} spacing={6}>
            <Flex alignItems="flex-end" justifyContent="flex-start" backgroundImage={`url(${header})`} backgroundSize="cover" padding={6} minHeight={64} borderRadius="md">
                <Heading color="white" fontSize="4xl"> 
                    Electronics
                </Heading>
            </Flex>
            <ProductsList products={products}/>
        </Stack>
    );
};

export default HomeScreen;