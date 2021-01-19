import React, { useEffect } from 'react';

interface Props {
  onSelect: (p: any) => void;
  [p: string]: any;
}

const Timer: React.FC<Props> = (props) => {

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      props.onSelect(null);
    }, 5000);
    return () => {
      clearTimeout(timeoutID);
    };
  }, [props, props.onSelect]);

  return (
    <>
    {
      [1,2,3,4].map(choice => (
        <button
          key={choice}
          data-testid={choice}
          onClick={() => props.onSelect(choice)}
        >
          {choice}
        </button>
      ))
    }
    </>
  )
}

export default Timer;
