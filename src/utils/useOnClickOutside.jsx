// eslint-disable-line react-hooks/exhaustive-deps
import { useEffect } from 'react';

const useOnClickOutside = (ref, handler, subRef=null) => {
    useEffect(
      () => {
        const listener = event => {
          // Do nothing if clicking ref's element or descendent elements
          if ((!ref.current || ref.current.contains(event.target)) || (subRef?.current && subRef.current.contains(event.target))) {
            return;
          }
  
          handler(event);
        };
  
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
  
        return () => {
          document.removeEventListener('mousedown', listener);
          document.removeEventListener('touchstart', listener);
        };
      },
      [ref, handler, subRef]
    );
  };

  export default useOnClickOutside;