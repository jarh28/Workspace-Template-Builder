import './App.css';
import WorkspaceSettings from './WorkspaceSettings';
import WorkspacePreview from './WorkspacePreview';
import { useState } from 'react';

function App() {
  const [logo, setLogo] = useState(undefined);
  const [name, setName] = useState('');
  const [url, setURL] = useState('');
  const [size, setSize] = useState('Sólo yo');

  const [color, setColor] = useState('#39B0FF')
  const [privacy, setPrivacy] = useState('private');

  return (
    <div className="main-container">
      <WorkspaceSettings
        logo={logo} setLogo={setLogo} 
        name={name} setName={setName}
        url={url} setURL={setURL}
        size={size} setSize={setSize}
        color={color} setColor={setColor}
        privacy={privacy} setPrivacy={setPrivacy}
      />
      <WorkspacePreview 
        logo={logo}
        name={name}
        url={url}
        size={size}
        color={color}
        privacy={privacy}
      /> 
    </div>
  );
}

export default App;
