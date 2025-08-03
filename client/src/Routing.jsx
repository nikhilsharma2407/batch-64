import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Routing = () => {
    const { pathname, search } = useLocation();
    const params = useParams();
    console.log("🚀 ~ Routing ~ params:", params)
    return (
        <>
            <section>path- {pathname}</section>
            <section>search - {search}</section>
            <section>Route Params - {params.productId} </section>
            <section>Query params - </section>
        </>
    )
}

export default Routing