import { Title } from "./Title"

export type RestaurantData = {
    name: string,
    ratings: number,
    thumbnailUrl: string,
    duration?: string,
}

export const RestaurantCard = ({name, ratings, thumbnailUrl, duration}: RestaurantData) => {
    return (
        <div>
            {name}
            {ratings}
            {thumbnailUrl}
            {duration}
        </div>
    )
}