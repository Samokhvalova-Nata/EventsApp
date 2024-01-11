import Image from 'next/image';

const EventCatPage = ({ data, pageName }) => {
    return (
        <div>
            
            {/* TODO */}
            <h1>{`Events in ${pageName.toUpperCase()}`}</h1>

            <div>
                {data.map(ev => (
                    <a href={`/events/${ev.city}/${ev.id}`} key={ev.id}>
                        <Image src={ev.image} alt={ev.title} width={300} height={300}/>
                        <h2>{ev.title}</h2>
                        <p>{ev.description}</p>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default EventCatPage;

export async function getStaticPaths() {
    const {events_categories} = await import('/data/data.json');
    const allPaths = events_categories.map( ev => {
        return {
            params: {
                cat: ev.id.toString(),
            },
        };
    });
    // console.log('allPaths', allPaths)

    return {
        paths: allPaths,
        fallback: false,
    };
};

export async function getStaticProps(context) {
    console.log('context', context);
    const id = context?.params.cat;

    const {allEvents} = await import('/data/data.json');

    const data = allEvents.filter(ev => ev.city.toLowerCase() === id.toLowerCase());
    console.log('data', data)

    return {
        props: { data, pageName: id }
    };
};