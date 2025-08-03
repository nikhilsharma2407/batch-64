import React from 'react'
import { FormControl } from 'react-bootstrap';
import { useLocation, useParams, useSearchParams } from 'react-router-dom'

const Routing = () => {
    const { pathname, search } = useLocation();
    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    console.log("🚀 ~ Routing ~ searchParams:", searchParams, typeof searchParams)
    console.log("🚀 ~ Routing ~ params:", params)
    return (
        <>
            <section>path- {pathname}</section>
            <section>search - {search}</section>
            <section>Route Params - {params.productId} </section>
            <section>Query params - {searchParams.get('lang')} </section>

            <FormControl placeholder='Enter search term' onChange={e => setSearchParams({ q: e.target.value })} />
        </>
    )
}

export default Routing