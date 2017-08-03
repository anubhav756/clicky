import React from 'react';
import ClickyButton from '../../components/ClickyButton';

function App() {
  return (
    <div>
      <ClickyButton clicks={1000} color="red" handleTouchTap={console.log} />
      <ClickyButton clicks={1000} color="yellow" handleTouchTap={console.log} />
      <ClickyButton clicks={1000} color="blue" handleTouchTap={console.log} />
    </div>
  );
}

export default App;
