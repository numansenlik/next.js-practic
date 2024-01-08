"use client"

import { useRouter } from "next/navigation";

const Trial = () => {
    console.log("Client");
    const routerRed = useRouter();
    return (
        <>
            <div>Trial</div>
            <div onClick={()=> routerRed.push('/about')}>Push</div>
            <div onClick={()=> routerRed.back()}>Back</div>
            <div onClick={()=> routerRed.refresh()}>RefResh</div>
            <div onClick={()=> routerRed.forward()}>Forward</div>
        </>
    )
}
export default Trial