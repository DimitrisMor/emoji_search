import React, { useEffect, useState } from 'react';
import Element from './Element';
import '../list.css';

const List=({term})=> {

  var data=require('emoji.json');
  console.log(data);
  let emojis=data.map(emoji=>{
        let codes = emoji.codes;
        let char = emoji.char;
        let name=emoji.name;
        let category=emoji.category;
        let group=emoji.group;
        if(name.match(term)){    
          return <Element char={char} alt={name} code={codes}/>
        }    
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