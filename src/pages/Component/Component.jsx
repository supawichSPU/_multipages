import './Component.css'
import Timer from './timer/timer'
import Temperature from './temperature/temperature'
import Counter from './counter/counter'
import Addvalue from './add/add'
function Component() {
    return (
        <div className="component-contrainer">
            <div className='container'>
                <div className='left'>
                    <Counter name={'Counter'} value={0} />
                    <Timer />
                </div>
                <div className='right'>
                    <Addvalue />
                </div>
            </div>
            <div className='content'>
                <Temperature />
            </div>
        </div>
    );
}

export default Component;