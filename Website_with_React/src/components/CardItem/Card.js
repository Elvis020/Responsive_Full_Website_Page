import React from 'react'
import CardItem from './CardItem';
import './Card.css';

const Card = () => {
    return (
        <div className='cards'>
            <h1>Check out these EPIC destination</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src='images/img-9.jpg' text="Explore the hidden waterfall deep inside the Amazon Jungle" label="Adventure" path='/services'  />
                        <CardItem src='images/img-2.jpg' text="Travel through the island of Bali and a private cruise" label="Luxury" path='/services'  />
                    </ul>
                    <ul className="cards__items">
                        <CardItem src='images/img-6.jpg' text="Do culpa ex do nisi ex ad officia cupidatat nisi adipisicing cillum magna elit." label="Mystery" path='/services'  />
                        <CardItem src='images/img-5.jpg' text="Minim sit incididunt quis ut eu ullamco consequat sit Lorem." label="Adrenaline" path='/services'  />
                        <CardItem src='images/img-7.jpg' text="Ea incididunt anim ad adipisicing." label="Excitement" path='/services'  />
                    </ul>
                    {/* Separator */}
                </div>
            </div>
        </div>
    )
}

export default Card
