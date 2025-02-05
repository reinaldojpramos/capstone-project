import '../styles/CallToAction.css';
import restauranfood from '../assets/images/restauranfood.jpg';
import { Link } from 'react-router-dom';

function CallToAction() {
    return (
        <>
            <div className="container-div">
                <div />
                <div>
                    <h1 className='title'>Little Lemon</h1>
                    <h2 className='subtitle'>Chicago</h2>
                    <p className='description'>
                        We are a family owned Mediterranean restaurant,
                        focused on traditional recipes served with a
                        modern twist.
                    </p>
                    <Link to='booking'>
                        <button className='call-to-action'>Reserve a Table</button>
                    </Link>
                </div>
                <div className='image-container'>
                    <img className='food-image' src={restauranfood} alt='Restaurant food' />
                </div>
                <div />
            </div>
        </>
    );
}

export default CallToAction;