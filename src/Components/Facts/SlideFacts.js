import React from 'react';

const slideFacts = ({item}) => {
    return (
        <div>
            <img src={item.imgUrl} alt="slide image"/>
            <p className="facts-slide-desc">
                {item.desc}
            </p>
        </div>
    );
};

export default slideFacts;