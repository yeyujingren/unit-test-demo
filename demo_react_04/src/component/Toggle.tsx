import React, { useState } from 'react';

interface Props {
  onChange: (state: boolean) => void;
  [p: string]: any
}

const Toggle: React.FC<Props> = (props) => {
  const [state, setState] = useState<boolean>(false);
  const stateChangeHandler = () => {
    setState(!state);
    props.onChange(!state);
  }

  return (
    <button
      onClick={stateChangeHandler}
      data-testid="toggle"
    >
      {(state && 'Turn off') || 'Turn on'}
    </button>
  )
}

export default Toggle;
