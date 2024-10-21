import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Headers/Header";




function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready()
    }, [])

    return (
        <div className="App">
            <Header />
            <Header />
            <button onClick={onToggleButton}>toggle</button>
        </div>
    );
}

export default App;
