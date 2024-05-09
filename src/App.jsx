import styles from './App.module.css';
import StaffNavbar from './components/navbar/StaffNavbar';
import Products from './pages/products/Products';
import Footer from './components/footer/Footer';
function App() {
    return (
        <div className={styles.App}>
            <StaffNavbar />
            <Products />
            <Footer/>
        </div>
    );
}


export default App;
