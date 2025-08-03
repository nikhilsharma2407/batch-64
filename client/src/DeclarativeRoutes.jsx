import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './Products'
import FunctionalComponent from './FunctionalComponent'

const DeclarativeRoutes = () => {
    return (
        <>
            <section>

            </section>

            <Routes>
                <Route path='products' element={<Products />} />
                <Route path='routing' element={<FunctionalComponent />} />
                <Route path='test' element={<h1>abcd</h1>} />

                <Routes path='parent' element={<h1>Parent</h1>}>
                    <Route path='child-1'element={<h1>Child-1</h1>} />
                    <Route path='child-2'element={<h1>Child-2</h1>} />
                    <Route path='child-3'element={<h1>Child-3</h1>} />
                </Routes>
            </Routes>
        </>
    )
}

export default DeclarativeRoutes