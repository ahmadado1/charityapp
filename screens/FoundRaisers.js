import { useContext } from "react";
import { AppContext } from "../Settings/globalVariables";
import { SafeArea } from "../component/SafeArea";


export function FundRaiser () {
    const {uid} = useContext(null);
    console.log(uid);
    return(
        <SafeArea>
            
        </SafeArea>
    )
}
