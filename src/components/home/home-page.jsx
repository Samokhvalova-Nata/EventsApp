import Image from "next/image"
import Link from "next/link"

export const HomePage = ({data}) => {
    return (
        <main>

        {data?.map(ev => 
            <Link href={`/events/${ev.id}`} key={ev.id} passHref>
                <Image src={ev.image} alt={ev.title} width={300} height={300}/>
                <h2>{ev.title}</h2>
                <p>{ev.description}</p>
            </Link>)}

        </main>
    )
}