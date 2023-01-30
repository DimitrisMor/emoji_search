import React, { useEffect, useState } from 'react';
import '../list.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Element=({char, alt, code})=> {

  return (
    <div>
        <li className='ele' key={code}>
            <CopyToClipboard text={char}>
              <div><span id='icon'>{char}</span> <span id='iconName'>{alt}</span></div>              
            </CopyToClipboard>
        </li>
    </div>    
  )
}

export default Element