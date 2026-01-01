import {BusTable} from "./components/BusTable.tsx";

function App() {
    return (
        <div style={{padding: '2rem', fontFamily: 'Arial, sans-serif'}}>
            <header style={{
                backgroundColor: '#003399',
                padding: '1rem 2rem',
                marginBottom: '2rem',
                borderRadius: '8px',
            }}>
                <h1 style={{color: 'white', margin: 0, fontSize: '1.5rem'}}>CIVA - Reto Técnico</h1>
            </header>
            <main>
                <BusTable />
            </main>
        </div>
    );
}

export default App
