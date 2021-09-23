import React from 'react';
import Marquee from 'react-double-marquee';
import "./css/cssFScrollText.css"
export default function FooComponent() {
  return (
    <div
      style={{
        width: '100%',
        whiteSpace: 'nowrap',
        border: '1px solid red',
        alignItems: "center"
      }}
    >
      <Marquee>
        2021 new puzzle web game just coming soon!!!!!!
      </Marquee>
    </div>
  );
}