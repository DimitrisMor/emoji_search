import React, { useEffect, useState } from 'react';
import '../list.css';

const Element=({char, alt, code})=> {


  const[copied, setCopied]=useState('');

  return (
    <div>
        <li className='ele' key={code} onClick={()=>setCopied(char)}>
            {/* {char} {alt} */}
            {/* <CopyToClipboard text={char}> */}
              <span id='icon'>{char}</span> <span id='iconName'>{alt}</span>
            {/* </CopyToClipboard> */}
        </li>
    </div>
  )
}

export default Element