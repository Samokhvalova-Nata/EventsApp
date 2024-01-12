import Image from "next/image"
import Link from "next/link"

export const HomePage = ({data}) => {
    return (
        <div className="home-body">

        {data?.map(ev => 
            <Link className="card" href={`/events/${ev.id}`} key={ev.id} passHref>
                <Image src={ev.image} alt={ev.title} width={600} height={400}/>
                <div className="content">
                    <h2>{ev.title}</h2>
                    <p>{ev.description}</p>
                </div>
            </Link>
            )}

        </div>
    )
}