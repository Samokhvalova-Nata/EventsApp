import { CatEvent } from '@/src/components/events/catEvent';


const EventCatPage = ({ data, pageName }) => {
    return (
        <CatEvent data={data} pageName={pageName}/>
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

    const pageName = id.charAt(0).toUpperCase() + id.slice(1).toLowerCase();

    return {
        props: { data, pageName }
    };
};