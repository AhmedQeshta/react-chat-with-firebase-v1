import { useState } from 'react';
import { ChatBox, NavBar, Welcome } from './components';

function App() {
  const [user, setUser] = useState(false);
  return (
    <div className="App">
      <NavBar />
      {!user ? <Welcome /> : <ChatBox />}
    </div>
  );
}

export default App;
