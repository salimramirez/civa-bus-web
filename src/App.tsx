import './App.css'
import {BusTable} from "./components/BusTable.tsx";

function App() {
    return (
        <div style={{padding: '2rem', fontFamily: 'Arial, sans-serif'}}>
            <header>
                <h1 style={{color: '#003399'}}>CIVA - Reto Técnico</h1>
            </header>
            <main>
                <BusTable />
            </main>
        </div>
    );
};

export default App
