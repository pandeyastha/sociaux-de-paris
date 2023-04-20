import React, { useEffect } from 'react';

export const Header =({title}) =>{
 useEffect( ()=> {
    document.title=title;
 },[title]);

 return (
    <></>
 );

};

