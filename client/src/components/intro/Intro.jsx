import React from 'react'
import './intro.css';
import Nav from '../nav/Nav'
const covid = require('../../img/covid.png')

export const Intro = () => {
    return (

        <div className='i flex flex-col '>
            <div><Nav /></div>
            <div className='i-covid flex flex-row'>
                <div className='flex flex-col justify-center items-center'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nesciunt minima vero quidem porro at veritatis, doloremque tenetur repudiandae cum blanditiis beatae suscipit fugiat sequi nobis eos iure voluptas esse.
                    </p>
                    <button>get started</button>
                </div>
                <div className='w-full '>
                    <img src={covid} alt="covid19" />
                </div>
            </div>
        </div>
    )
}

export default Intro;