import * as React from 'react';

import Menu from './components/Menu';
import MobileMenu from './components/MobileMenu';
import Body from './components/Body';

import { useViewport } from './hooks/Responsive';

function App() {

  const {width} = useViewport();
  
  return (
    <>
      <div>
          { width > 900 ? <Menu /> : <MobileMenu />}
          <Body />
      </div>
    </>
  );
}

export default App;
