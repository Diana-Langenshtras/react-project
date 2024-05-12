import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import "./styles/variables.css";
import "./styles/themes.css";
import "./styles/style.css";

import HomePage from "./pages/HomePage";
import SettingsPage from "./pages/SettingsPage";


function App() {
    
    
  return (
    <div className="App">
      <Router>
				<Routes>
					<Route path="/settings" element={<SettingsPage />} />
          <Route path="/" element={<HomePage />} />
				</Routes>
			</Router>
    </div>
  );
}

export default App;
