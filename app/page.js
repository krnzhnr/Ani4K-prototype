'use client'

import Banner from "@/app/elements/banner/banner";
import Navbar from "@/app/elements/navbar/navbar";

export default function Home() {
    return (
        <>
        {/*<head>*/}
        {/*    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"*/}
        {/*          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"*/}
        {/*          crossOrigin="anonymous"/>*/}
        {/*    /!* eslint-disable-next-line @next/next/no-sync-scripts *!/*/}
        {/*    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"*/}
        {/*            integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"*/}
        {/*            crossOrigin="anonymous"></script>*/}
        {/*</head>*/}

            <Navbar/>
            <Banner/>
        </>
    );
}


