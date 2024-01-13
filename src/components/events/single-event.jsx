import React from 'react';
import Image from 'next/image';

export const SingleEvent = ({ data }) => {
    return (
        <div className='single-event'>
            <Image src={data.image} alt={data.title} width={1000} height={500}/>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <input type='email' placeholder="Please insert your email here"/>
            <button type="submit">Submit</button>
        </div>
    );
};
