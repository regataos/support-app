import './App.css';
import { SideBar } from "./components/side-bar/SideBar";
import { HomePage } from "./components/home/HomePage"
import { WebView } from "./components/WebView"

const App = () => {
	return (
		<div id="main-container">
			<SideBar />
			<HomePage />
			<WebView />
		</div>
	);
};

export default App;
