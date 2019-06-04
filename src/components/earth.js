import React from 'react';
import './earth.scss';

const Earth = () => {
  return (
    <figure class="system">
        <span class="planet"></span>
        <span class="moon"></span>
        
        <span class="star star--blue star--1"></span>
        <span class="star star--blue star--2"></span>
        <span class="star star--red star--3"></span>
        <span class="star star--round star--4"></span>
        
        <span class="star star--red star--5"></span>
        <span class="star star--round star--6"></span>
        <span class="star star--blue star--7"></span>
    </figure>
  )
}

export default Earth;