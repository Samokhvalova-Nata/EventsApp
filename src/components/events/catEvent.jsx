import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export function CatEvent({ data, pageName }) {
    return (
        <div className='cat_events'>

        {/* TODO */}
        <h1>Events in {pageName}</h1>

        <div className='content'>
            {data.map(ev => (
                <Link href={`/events/${ev.city}/${ev.id}`} key={ev.id} passHref className='card'>
                    <Image src={ev.image} alt={ev.title} width={300} height={300}/>
                    {/* <div className='card_descript'> */}
                        <h2>{ev.title}</h2>
                        <p>{ev.description}</p>
                    {/* </div> */}
                </Link>
                
            ))}
        </div>
    </div>
    );
};