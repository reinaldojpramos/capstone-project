import '../styles/Specials.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Specials() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/specials/specials.json')
      .then((response) => response.json())
      .then((parsedData) => setData(parsedData))
      .catch((error) => console.error('Error loading the JSON data:', error));
  }, []);

  return (
    <div className="specials-component">
      <div className="empty-row" />
      <div className="specials-title">
        <div className="empty-column" />
        <div className="specials-title-text">
          <h1>This week's specials!</h1>
          <Link to='/'>
            <button className='online-menu'>Online Menu</button>
          </Link>
        </div>
        <div className="empty-column" />
      </div>
      <div className='specials-cards-area'>
        <div />
        <div
          className="specials-cards"
        >
          {data && data.specials.map((special) => (
            <SpecialsCard
              key={special.title}
              title={special.title}
              paragraph={special.paragraph}
              price={special.price}
              image={special.image}
            />
          ))}
        </div>
        <div />
      </div>
      <div className="empty-row" />
    </div>
  );
}

function SpecialsCard(props) {
  const imagePath = `/specials/images/${props.image}`;

  return (
    <div className="specials-card">
      <div className="specials-card-img">
        <img src={imagePath} alt={props.title} />
      </div>
      <div className="specials-card-text">
        <span style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h2>{props.title}</h2>
          <p className='price'>
            {props.price}
          </p>
        </span>
        <p>{props.paragraph}</p>
      </div>
      <p className='order-now'>Order a delivery&nbsp;&nbsp;&nbsp;&nbsp;🚗</p>
    </div>
  );
}

export default Specials;