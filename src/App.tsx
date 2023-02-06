import './App.css';
import { SideBar } from "./components/side-bar/SideBar";
import { HomePage } from "./components/home/HomePage"

const App = () => {
	return (
		<div id="main-container">
			<SideBar />
			<HomePage />
			<div id="webview-container"></div>
		</div>
	);
};

export default App;
