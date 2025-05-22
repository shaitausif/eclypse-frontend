// App.tsx
import './App.css';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import { ProductProvider } from './context/productContext';

function App() {
  return (
    <ProductProvider>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </ProductProvider>
  );
}

export default App;
