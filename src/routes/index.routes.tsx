import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/public/HomePage";
import BuyCarPage from "../pages/public/BuyCarPage";
import RentCarPage from "../pages/public/RentCarPage";


export default function LayoutRoot()
{
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/comprar-carro" element={<BuyCarPage />} />
			<Route path="/alugar-carro" element={<RentCarPage />} />
		</Routes>
	)
}