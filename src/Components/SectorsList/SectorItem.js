import React, { useState } from 'react';

const SectorItem = ({sector, number}) => {
    const [isToolTipShowing, setToolTipShowing] = useState(false);
    const [isDirectionSwitched, setDirectionSwitched] = useState(false)
    const toogleToolTip =(NewValue) => {
  
        setDirectionSwitched(number % 3 === 0);
  
        setToolTipShowing(NewValue)
    }
    
    return (
        <div className="sectors-list-item"
        onMouseEnter={() => toogleToolTip (true)}
        onMouseLeave={() => toogleToolTip (false)}
        style={{
            background: `url(${sector.imgUrl}) center no-repeat`,
            backgroundSize: 'cover'
        }}>
            <p className="sectors-list-item-name">
         {sector.name}
            </p>
           
           { isToolTipShowing && <p className={`sectors-list-item-tooltip ${
               isDirectionSwitched ? "sectors-list-item-tooltip-switched"
               : ''
           }`} >
                {sector.description}
            </p>
}
        </div> 
    );
};

export default SectorItem;