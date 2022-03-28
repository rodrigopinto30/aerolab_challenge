import { Center, CircularProgress } from "@chakra-ui/react";
import React from "react";
import { Product } from "~/product/types";
import api from "./api";
import { User } from "./types";
import productApi from '~/product/api';

export interface Context{
    state:{
        user: User;
    }
    actions:{
        addPoints: (amount: number) => Promise<void>;
        redeem: (product: Product) => Promise<void>;   
    }
};

const UserContext = React.createContext({} as Context);

const UserProvider: React.FC = ({children})=>{
    const [user, setUser] = React.useState<User>();
    const [status, setStatus] = React.useState<"pending" | "resolved" | "rejected">("pending");

    // Funcion que actualiza los puntos del usuario
    async function handleAddPoints(amount: number){
        if(!user) return;

        return api.points.add(amount).then(()=>{
            setUser({...user, points: user.points + amount});
        });
    }
    
    async function handleRedeem(product: Product){
        if(!user) return;

        return productApi.redeem(product).then(() => {
            setUser({...user, points: user.points - product.cost})
        })
    }

    // Cuando el componenete se cargue debera traer la informacion del usuario y los productos
    React.useEffect(()=>{
        api.fetch().then((user)=>{
            setUser(user);
            setStatus("resolved");
        });
    }, []);

    // Spinner que se ejecutara cuando nuestro componentes este cargando
    if(!user || status === "pending"){
        return(
            <Center padding={12}>
                <CircularProgress isIndeterminate color="red"/>
            </Center>
        );
    }

    const state: Context["state"]={
        user,
    };
    const actions = {
        addPoints: handleAddPoints, 
        redeem: handleRedeem,
    };

    return <UserContext.Provider value={{state, actions}}>{children}</UserContext.Provider>
};
export {UserContext as default, UserProvider as Provider};