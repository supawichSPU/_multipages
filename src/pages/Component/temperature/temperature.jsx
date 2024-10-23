import Variable from "../variable/variable";
import './temperature.css';
import { useState } from 'react'
function Temperature() {
    const [celsius ,setCelsius] = useState(25.00)
    const [fahrenheit ,setFahrenheit] = useState(77.00)
    const [kelvin ,setKelvin] = useState(298.15)

    // function to convert between celsius, fahrenheit and kelvin
    function celsHandle(newcelsius){
        setCelsius(newcelsius)
        setFahrenheit((newcelsius * 9/5 )+32)
        setKelvin(newcelsius +273.15)
    }
    function fahHandle(newfahrenheit){
        setFahrenheit(newfahrenheit)
        setCelsius((newfahrenheit - 32)* 5/9)
        setKelvin((newfahrenheit -32)* 5/9 + 273.15)
    }
    function kevHandle(newkevin){
        setKelvin(newkevin)
        setCelsius(newkevin - 273.15)
        setFahrenheit((newkevin - 273.15) * 9/5 + 32)

    }

    return ( 
        <div className="temperature-contrainer">
            <h3 className="temperature-title">Temperature</h3>
            <h3 className="temperature-adjust">
                <span className="badge bg-primary">{celsius.toFixed(2)} °C</span> 
                <span className="badge bg-primary">{fahrenheit.toFixed(2)} °F</span>
                <span className="badge bg-primary">{kelvin.toFixed(2)} °K</span>
            </h3>
            <div className="temperature-variable">
                <Variable name="Celsius" value={celsius} setValue={celsHandle} />
                <Variable name="Fahrenheit" value={fahrenheit} setValue={fahHandle} />
                <Variable name="Kelvin" value={kelvin} setValue={kevHandle}/>
            </div>
        </div> 
    );
}

export default Temperature;