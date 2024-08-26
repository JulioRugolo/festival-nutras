/* eslint-disable react/prop-types */
import garfo from '../../assets/img/elementos/01-garfo.png';
import faca from '../../assets/img/elementos/02-faca.png';
import './title.css';

const Title = ({ title, color }) => {
  return (
    <div className='title-container-component'>
      <div className='title' style={{ color: color }}>
        <img className='garfo-title' src={garfo} alt="Garfo" />
        <h1>{title}</h1>
        <img className='faca-title' src={faca} alt="Faca" />
      </div>
    </div>
  );
};

export default Title;
