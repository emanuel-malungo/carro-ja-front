import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/public/HomePage";
import BuyCarPage from "../pages/public/BuyCarPage";


export default function LayoutRoot()
{
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/comprar-carro" element={<BuyCarPage />} />
		</Routes>
	)
}