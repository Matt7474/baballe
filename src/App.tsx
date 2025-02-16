import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Header from "./components/Header";

function App() {
	return (
		<>
			<BrowserRouter>
				<div className="flex flex-col">
					<Header />
					<Routes>
						<Route path="/" element={<Homepage />} />
						<Route path="/about" element={<About />} />
					</Routes>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
