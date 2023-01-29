import React, { useEffect, useState } from 'react';
import Element from './Element';
import '../list.css';

const List=()=> {

  var data=require('emoji.json');
  let emojis=data.map(emoji=>{
    let codes = emoji.codes;
    let char = emoji.char;
    let name=emoji.name;
    let category=emoji.category;
    let group=emoji.group;
    return <Element char={char} alt={name} code={codes}/>
  })
  
  return (
    <div>
      <ul className='list'>
        {emojis}
      </ul>
    </div>
  )
}

export default List