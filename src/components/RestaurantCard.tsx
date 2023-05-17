import { Title } from "./Title"
import { Image } from "./Image"

export type RestaurantData = {
    name: string,
    ratings: number,
    thumbnailUrl: string,
    duration?: string,
}

export const RestaurantCard = ({name, ratings, thumbnailUrl, duration}: RestaurantData) => {
    return (
        <div>
            <div className="thumbnail w-56 aspect-[4/3]">
                <Image src={thumbnailUrl} alt={`Image of ${name}`}/>
            </div>
            <div className="details flex">
                <div className="title flex-1">{name}</div>
                <div className="ratings">{ratings}</div>
            </div>
            <div className="duration">
                {duration}
            </div>
        </div>
    )
}
