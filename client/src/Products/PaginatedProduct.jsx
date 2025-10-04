import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import useApi from '../useApi'
import { ENDPOINTS, axiosInstance } from '../apiUtils'
import Loader from '../Loader'
import Products from '.'

const PaginatedProduct = () => {
    const [page, setPage] = useState(1);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pageCount, setPageCount] = useState(1)
    const limit = 10;

    useEffect(() => {
        console.log("🚀 ~ PaginatedProduct ~ new page:", page)

        const abortController = new AbortController();

        (async () => {
            try {
                setLoading(true)
                const { data } = (await axiosInstance.get(ENDPOINTS.PRODUCTS.GET_PRODUCTS, {
                    params: { limit, page },
                    signal: abortController.signal
                })).data

                setProducts(data.products);

                const { totalCount } = data;

                setPageCount(Math.ceil(totalCount / limit))
            } catch (error) {
                console.log("🚀 ~ PaginatedProduct ~ error:", error)
            } finally {
                setLoading(false)
            }
        })();

        return () => {
            abortController.abort('Api cancelled!!!');
            console.log("🚀 ~ PaginatedProduct ~ cleanup: for previous state", page);
        }

    }, [page]);



    const handlePageClick = (e) => {
        const newPage = e.selected + 1;
        console.log("🚀 ~ handlePageClick ~ newPage:", newPage)
        setPage(newPage);
    }

    return (
        <>
            <Products products={products} />
            <Loader isLoadingProp={loading} />
            {pageCount && products.length ? <ReactPaginate
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName="pagination"
                activeClassName="active"
            /> : null}

        </>
    )
}

export default PaginatedProduct
