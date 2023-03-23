import React, { useState } from 'react';
import './index.scss';

const Modal = ({open , setOpen , children}) => (
    <div className={`overlay animated ${open ? 'show' : ''}`}>
      <div className="modal">
        <svg onClick={() => setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
          <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
            {children}
      </div>
    </div> 
  )

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="App">
      <button onClick={() => setOpen(true)} className="open-modal-btn">
        Open modal window
      </button>
        <Modal open={open} setOpen={setOpen}>
          <img src="https://hips.hearstapps.com/pop.h-cdn.co/assets/17/24/640x320/landscape-1497533116-not-dead.gif?resize=640:*" />
          <h3>Let's Dance</h3>
        </Modal>
        {/* {open && (
        <div className="overlay">
          <div className="modal">
            <svg onClick={() => setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
              <title />
              <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
            </svg>
            <img src="https://hips.hearstapps.com/pop.h-cdn.co/assets/17/24/640x320/landscape-1497533116-not-dead.gif?resize=640:*" />
          </div>
        </div> 
      )} */}
    </div>
  );
}

export default App;
