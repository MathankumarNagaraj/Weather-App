
import Weather from "./Weather";
import { useLocation } from "react-router-dom"


function Landing()
{    const data = useLocation()
    console.log(data.state.user)

    return(
        <>
        <Weather/>
        </>
    )
}


export default Landing
