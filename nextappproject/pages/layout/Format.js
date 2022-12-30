import Headers from "../Components/header"
import Footer from "../Components/footer"
import Head from "next/head"
import { useEffect, useState } from "react"

export default function Format({children}){

   
    return (
        <>
        <Head>
            <title> Dinamalar Classifieds</title>
        </Head>
        <Headers></Headers>
        <main> {children} </main>
        <Footer></Footer>
        </>
    )
}