import PublicRoutes from "./routes/PublicRoutes";
import "../src/assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<>
			<PublicRoutes />
			<ToastContainer />
		</>
	);
}

export default App;
