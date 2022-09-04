import { Routes, Route } from "react-router-dom"
import { Home, Journey, Store, SingleProduct, Team, Contact } from "../pages"

export const AppRouter = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="store" element={<Store />} />
            <Route path="single-product/:productID" element={<SingleProduct />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    )
}