import React from 'react'
import { useState, lazy, Suspense } from 'react';
import Skeleton from '../website/Skeleton';
import './chat.css'

const Chat_box = lazy(() => import('./Chat_box'));

function Chat() {

const [icon ,setIcon] = useState("fa-brands fa-rocketchat");
const [text, setText] = useState("Chat with us");
const [sty,setSty] = useState(false);
const [showComponent, setShowComponent] = useState(false);

const handleClick = () => {
  setIcon(prevIcon => (prevIcon === "fa-brands fa-rocketchat" ? "fa-solid fa-xmark" : 'fa-brands fa-rocketchat'));
  setText(prevText=> (prevText==="Chat with us" ? '':"Chat with us"));

  setSty(!sty);
    setShowComponent(prevState => !prevState);
  };


  return (
    <div>
          <div  className=' text-xs right-12 fixed top-50 bottom-16 z-20'>
            <div>
           {showComponent && (
           <Suspense fallback={<Skeleton/>}>
          <Chat_box />
        </Suspense>)}
            </div>
             <button onClick={handleClick } className={sty ? 'x' : 'shop4'}> <i className={icon}></i>{text}
             </button>
          </div> 

        
        
    </div>
  );
}

export default Chat




