import { useState, useEffect } from 'react';
const isBrowser = typeof window !== "undefined"

function getWindowDimensions() {
    if(isBrowser){
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
    }
    else{
        return {
            width: 1800,
            height: 1200,
        }
    }

}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    if(isBrowser){
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }
  }, [isBrowser]);

  return windowDimensions;
}
