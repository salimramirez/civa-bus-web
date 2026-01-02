import { Outlet } from "react-router-dom";
import { Header } from "./components/Header.tsx";

function App() {
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <Header />
            <main className="max-w-7xl mx-auto">
                <Outlet />
            </main>
        </div>
    );
}

export default App
