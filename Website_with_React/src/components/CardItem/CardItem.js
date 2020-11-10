import React from 'react';
import {Link} from 'react-router-dom';

function CardItem({path,label,src,text}) {
    return (
        <>
            <li className="cards__item">
                <Link to={path} className='cards__item__link'>
                    <figure data-category={label} className="cards__item__pic-wrap">
                        <img className='cards__item__img' src={src} alt="Travel Image"/>
                    </figure>
                    <div className="card__item__info">
                        <h5 className="cards__item__text">{text}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem
