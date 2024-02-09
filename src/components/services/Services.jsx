import { useState } from 'react';
import './services.scss';

function Services() {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className='services section'>
      <h2 className='section__title'>Services</h2>
      <span className='section__subtitle'>What I offer</span>

      <div className='services__container container grid'>
        <div className='services__content'>
          <div>
            <i className='uil uil services__icon'></i>
            <h3 className='services__title'>Web Development</h3>
          </div>

          <span className='services__butoon' onClick={() => toggleTab(1)}>
            View More
            <i className='uil uil-arrow-right services__button-icon'></i>
          </span>

          <div
            className={
              toggleState === 1
                ? 'services__modal active-modal'
                : 'services__modal'
            }
          >
            <div className='services__modal-content'>
              <button
                className='uil uil-times services__modal-close'
                onClick={() => toggleTab(0)}
              ></button>

              <h3 className='services__modal-title'>Test Here</h3>
              <p className='services__modal-description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                sequi atque repudiandae? Ad, aperiam reiciendis. Et minima ut
                veniam labore.
              </p>

              <ul className='services__modal-services grid'>
                <li className='services__modal-services'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>I develop Interface</p>
                </li>

                <li className='services__modal-services'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>I develop Interface</p>
                </li>

                <li className='services__modal-services'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>I develop Interface</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='services__content'>
          <div>
            <i className='uil uil services__icon'></i>
            <h3 className='services__title'>Web Development</h3>
          </div>

          <span className='services__butoon' onClick={() => toggleTab(1)}>
            View More
            <i className='uil uil-arrow-right services__button-icon'></i>
          </span>

          <div
            className={
              toggleState === 1
                ? 'services__modal active-modal'
                : 'services__modal'
            }
          >
            <div className='services__modal-content'>
              <button
                className='uil uil-times services__modal-close'
                onClick={() => toggleTab(0)}
              ></button>

              <h3 className='services__modal-title'>Test Here</h3>
              <p className='services__modal-description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                sequi atque repudiandae? Ad, aperiam reiciendis. Et minima ut
                veniam labore.
              </p>

              <ul className='services__modal-services grid'>
                <li className='services__modal-services'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>I develop Interface</p>
                </li>

                <li className='services__modal-services'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>I develop Interface</p>
                </li>

                <li className='services__modal-services'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>I develop Interface</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='services__content'>
          <div>
            <i className='uil uil services__icon'></i>
            <h3 className='services__title'>Web Development</h3>
          </div>

          <span className='services__butoon' onClick={() => toggleTab(1)}>
            View More
            <i className='uil uil-arrow-right services__button-icon'></i>
          </span>

          <div
            className={
              toggleState === 1
                ? 'services__modal active-modal'
                : 'services__modal'
            }
          >
            <div className='services__modal-content'>
              <button
                className='uil uil-times services__modal-close'
                onClick={() => toggleTab(0)}
              ></button>

              <h3 className='services__modal-title'>Test Here</h3>
              <p className='services__modal-description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                sequi atque repudiandae? Ad, aperiam reiciendis. Et minima ut
                veniam labore.
              </p>

              <ul className='services__modal-services grid'>
                <li className='services__modal-services'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>I develop Interface</p>
                </li>

                <li className='services__modal-services'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>I develop Interface</p>
                </li>

                <li className='services__modal-services'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>I develop Interface</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
