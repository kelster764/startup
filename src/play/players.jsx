import React from 'react';

import { GameEvent, GameNotifier } from './gameNotifier';

export function Players(userName){
    const [events, setEvent] = React.useState([]);

    React.useEffect(() => {
        GameNotifier.addHandler(handleGameEvent);
    
        return () => {
          GameNotifier.removeHandler(handleGameEvent);
        };
      });

      function handleGameEvent(event) {
        setEvent([...events, event]);
      }

      function createMessageArray() {
        const messageArray = [];
        for (const [i, event] of events.entries()) {
          let message = 'unknown';
          if (event.type === GameEvent.Baby) {
            message = `is baby`;
          } else if (event.type === GameEvent.Kid) {
            message = `is kid`;
          } else if (event.type === GameEvent.Mom) {
            message = `is mom`;
          }else if (event.type === GameEvent.Dad) {
            message = `is dad`;
          }
    
          messageArray.push(
            <div key={i} className='event'>
              <span className={'player-event'}>{event.from.split('@')[0]}</span>
              {message}
            </div>
          );
        }
        return messageArray;
      }
      return (
        <div className='players'>
          Player
          <span className='player-name'>{userName}</span>
          <div id='player-messages'>{createMessageArray()}</div>
        </div>
      );
    
}