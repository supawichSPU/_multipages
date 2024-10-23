import { useState } from "react"
import './counter.css'

function Counter(props) {

     // ตรวจสอบว่า props.value เป็นตัวเลขหรือไม่ ถ้าไม่ใช่ให้ตั้งค่าเริ่มต้นเป็น 0
     const initialValue = typeof props.value === 'number' ? props.value : 0;
     const [value, setValue] = useState(initialValue)

    function increment(){
        // value = value + 1
        setValue(value + 1)
        console.log(value)
    }
    function decrement(){
        // value = value - 1
        setValue(value - 1)
        console.log(value)
    }
    return ( 
        <div className='counter-contrainer'>
            <h3 className='title'>Counter</h3>
            <button className='btn btn-danger' onClick={decrement}>-</button>
            <span className='value'>{value}</span>
            <button className='btn btn-success' onClick={increment}>+</button>
        </div> 
    );
}

export default Counter;