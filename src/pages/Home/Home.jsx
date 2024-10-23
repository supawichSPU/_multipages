import Myself from '../../assets/Myself.jpeg'
import './Home.css'
function Home() {
    return (
        <div className='contrainer'>
            <div className='introduce'>
                <img src={Myself} alt="myself" />
                <h4>Supawich kajadroka</h4>
                <p>Computer Science And Software <br/>Development Innovation (CSI) <br/>School of Infomation Technology (SIT) <br/>Sripatum University (SPU)</p>
                <p></p>
            </div>
            <div className='right-contrainer'>
                <h5><b>CSI205 Front End Software Development</b>,This will be my introduction skill of frontend:</h5>
                <ul>
                    <li><b>Basic UX/UI</b>: I have Basic UX/UI skill and I will use it in my future.Because I am learning.</li>
                    <li><b>HTML/CSS/JS</b>: I have Moderate HTML/CSS/JS skill and I will use it in my future.Because I am learning.and I need to Think about it. and i want to tell i don't like frontend,It so Difficult for me. </li>
                    <li><b>React</b>: I have very Basic React skill and I will use it in my future.Because I am learning. and I need to Think about it. to using this framework in my future.Because I'm Not enough skill for front end development. </li>
                </ul>
                <p>That All Topic I want to tell.</p>
            </div>
        </div>
    );
}

export default Home;