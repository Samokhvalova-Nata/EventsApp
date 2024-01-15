import React, { useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

export const SingleEvent = ({ data }) => {
    const inputEmail = useRef();
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();
        const emailValue = inputEmail.current.value;
        const eventId = router?.query.id;

        try {
            const response = await fetch('/api/email-registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: emailValue, eventId })
            });
            if(!response.ok) throw new Error(`Error: ${response.status}`)
            const data = await response.json();

            console.log('POST', data);

        } catch (error) {
            console.log('error', error)
        }
    };

    return (
        <div className='single-event'>
            <Image src={data.image} alt={data.title} width={1000} height={500}/>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <form onSubmit={onSubmit}>
                <label>Get registered for this event</label>
                <input 
                    ref={inputEmail} 
                    type='email' 
                    id='email' 
                    placeholder="Please insert your email here"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
