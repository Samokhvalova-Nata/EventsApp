import Image from 'next/image';

const EventsPage = ({ data }) => {
    return (
        <div>
            <h1>Event Page</h1>
            <div>
            {data.map(ev =>
            <a href={`/events/${ev.id}`} key={ev.id}>
                <Image src={ev.image} alt={ev.title} width={300} height={300}/>
                <h2>{ev.title}</h2>
                </a>)}
            </div>
        </div>
    );
};

export default EventsPage;

export async function getStaticProps() {
    const {events_categories} = await import('/data/data.json');

    return {
        props:{
            data: events_categories,
        },
    };
};