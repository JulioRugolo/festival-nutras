/* eslint-disable react/prop-types */
import garfo from '../../assets/img/elementos/01-garfo.png';
import faca from '../../assets/img/elementos/02-faca.png';
import './TitleMobile.css';

const TitleMobile = ({ title, color }) => {
  return (
    <div className='title-container-component-mobile'>
      <div className='title-mobile' style={{ color: color }}>
        <img className='garfo-title-mobile' src={garfo} alt="Garfo" />
        <h1>{title}</h1>
        <img className='faca-title-mobile' src={faca} alt="Faca" />
      </div>
    </div>
  );
};

export default TitleMobile;
