import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';


export const SingleEvent = ({ data }) => {
    const inputEmail = useRef();
    const router = useRouter();
    const [message, setMessage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        const emailValue = inputEmail.current.value;
        const eventId = router?.query.id;

        const validRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!emailValue.match(validRegex)) {
            setMessage('Please introduse a correct email address')
        }

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
            setMessage(data.message);
            inputEmail.current.value = '';

            // console.log('POST', data);

        } catch (error) {
            console.log('error', error)
        }
    };

    return (
        <div className='single-event'>
            <Image src={data.image} alt={data.title} width={1000} height={500} priority/>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <form onSubmit={onSubmit} className="email_registration">
                <label>Get registered for this event</label>
                <input 
                    ref={inputEmail} 
                    type='email' 
                    id='email' 
                    placeholder="Please insert your email here"/>
                <button type="submit">Submit</button>
            </form>
            <p>{message}</p>
        </div>
    );
};
