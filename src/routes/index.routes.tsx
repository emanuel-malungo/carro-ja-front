import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/public/HomePage";


export default function LayoutRoot()
{
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
		</Routes>
	)
}