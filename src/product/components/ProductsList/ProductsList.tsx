import { Divider, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import { Product } from "~/product/types";
import Count from "./Count";
import Filters from "./Filters";
import { Filter } from "./types";
import Grid from './Grid';

interface Props{
    products: Product[]
}

const ProductsList: React.FC<Props> = ({products}) =>{
    const [filter, setFilter] = React.useState<Filter>(Filter.MostRecent);
    
    // Se ejecutara solamente cuando las dependencias cambien
    const filteredProducts = React.useMemo(()=>{
        switch(filter){
            case Filter.HighestPrice:{
                return [...products].sort((a, b) => (b.cost - a.cost));
            }

            case Filter.LowestPrice:{
                return [...products].sort((a, b) => (a.cost - b.cost));
            }

            case Filter.MostRecent:
            default:{
                return products;
            }
        }
    }, [filter, products]);

    return(
        <Stack alignItems="flex-start" spacing={6}>
            <Stack 
                alignItems="center"
                as="nav" 
                direction="row" 
                divider={<Divider borderColor="gray.300" height={12} orientation="vertical" />}
                flex={1}
                spacing={6}
                width="100%"
            >
                <Count current={filteredProducts.length} total={products.length}/>
                <Filters active={filter} onChange={setFilter}/>
            </Stack>
            <Grid products={filteredProducts}/>
            <Count current={filteredProducts.length} total={products.length}/>
        </Stack>
    );
}
 
export default ProductsList;
