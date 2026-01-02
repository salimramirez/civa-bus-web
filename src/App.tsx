import {BusTable} from "./components/BusTable.tsx";

function App() {
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <header className="bg-blue-900 px-8 py-4 mb-8 rounded-lg shadow-md">
                <h1 className="text-white text-2xl font-bold m-0">CIVA - Reto Técnico</h1>
            </header>
            <main className="max-w-7xl mx-auto">
                <BusTable />
            </main>
        </div>
    );
}

export default App
