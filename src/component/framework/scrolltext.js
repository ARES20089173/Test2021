import React from 'react';
import Marquee from 'react-double-marquee';
import "./css/cssFScrollText.css"
export default function Scrolltext() {
  return (
    <div
      style={{
        width: '100%',
        whiteSpace: 'nowrap',
        alignItems: "center",
        color:"white",
        backgroundColor:'#727172'
      
      }}
    
    >
      <Marquee direction="left"  color='primary' >
      2021 new puzzle web game just coming soon!!!!!!
      </Marquee>
    </div>
  );
}