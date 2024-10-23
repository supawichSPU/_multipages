import { useState } from 'react';
import './Calculator.css'
function Calculator() {
    const [current, setCurrent] = useState('');
    const [previous, setPrevious] = useState('');
    const [operator, setOperator] = useState('');

    const appendNumber = (number) => {
        setCurrent((prev) => (prev === '0' ? number : prev + number));
    };

    const clearScreen = () => {
        setCurrent('');
        setPrevious('');
        setOperator('');
    };

    const clearOne = () => {
        setCurrent((prev) => (prev.length > 1 ? prev.slice(0, -1) : ''));
    };

    const chooseOperator = (op) => {
        if (current === '') return;
        if (previous !== '') {
            calculate();
        }
        setOperator(op);
        setPrevious(current);
        setCurrent('');
    };

    const calculate = () => {
        if (previous === '' || operator === '' || current === '') return;
        const prev = parseFloat(previous);
        const curr = parseFloat(current);
        let result;

        switch (operator) {
            case '+':
                result = prev + curr;
                break;
            case '-':
                result = prev - curr;
                break;
            case 'x':
                result = prev * curr;
                break;
            case '÷':
                result = prev / curr;
                break;
            default:
                return;
        }

        setCurrent(result.toString());
        setPrevious('');
        setOperator('');
    };
    return (
        <div className="calculator-input">
            <input type="text" className="calculator-screen" value={current || '0'} readOnly />
            <div className="calculator-keys">
                <button onClick={clearScreen} className="btn-operator" value="ac">AC</button>
                <button onClick={clearOne} className="btn-operator" value="c">C</button>
                <button onClick={() => chooseOperator('%')} className="btn-operator" value="%">%</button>
                <button onClick={() => chooseOperator('÷')} className="btn-operator" value="÷">&divide;</button>

                {[7, 8, 9].map((num) => (
                    <button key={num} onClick={() => appendNumber(num.toString())} className="btn-num" value={num}>
                        {num}
                    </button>
                ))}

                <button onClick={() => chooseOperator('x')} className="btn-operator" value="x">&times;</button>

                {[4, 5, 6].map((num) => (
                    <button key={num} onClick={() => appendNumber(num.toString())} className="btn-num" value={num}>
                        {num}
                    </button>
                ))}

                <button onClick={() => chooseOperator('-')} className="btn-operator" value="-">&minus;</button>

                {[1, 2, 3].map((num) => (
                    <button key={num} onClick={() => appendNumber(num.toString())} className="btn-num" value={num}>
                        {num}
                    </button>
                ))}

                <button onClick={() => chooseOperator('+')} className="btn-operator" value="+">+</button>

                <button onClick={() => appendNumber('0')} className="btn-num" value="0">0</button>
                <button onClick={() => appendNumber('.')} className="btn-num" value=".">.</button>
                <button onClick={calculate} className="btn-eqal" value="=">=</button>
            </div>
        </div>
    );
}

export default Calculator;