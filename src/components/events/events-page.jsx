import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const AllEvents = ({ data }) => {
    return (
        <div className='events_page'>

            {data.map(ev =>
            <Link href={`/events/${ev.id}`} key={ev.id} passHref className='event_card'>

                <Image src={ev.image} alt={ev.title} width={400} height={400}/>
                <h2>{ev.title}</h2>

                
            </Link>)}

        </div>
    );
};
