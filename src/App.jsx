import styles from './App.module.css';
import Navbar from './Components/Navbar';
import LandingPage from './pages/LandingPage/LandingPage.jsx';
// import Landing from './Components/Landing'
function App() {
    return (
        <div className={styles.App}>
            <Navbar />
            <LandingPage />
        </div>
    );
}

export default App;
