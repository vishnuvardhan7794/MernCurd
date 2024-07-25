import { RouterProvider, Routes, Route } from "react-router-dom";
import Items from "../Items/items";
import AddItem from "../AddItem/AddItem";

const AppRoutes = () => {
    return <>
        <Routes>
            <Route path="/items" element={<Items />}></Route>
            <Route path="/addItem" element={<AddItem />}></Route>
        </Routes>
    </>
}

export default AppRoutes