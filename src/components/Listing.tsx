import { Title } from "./Title"
import { RestaurantCard } from "./RestaurantCard"
import type { RestaurantData } from "./RestaurantCard"

export type ListingProps = {
    title: string,
    listings: RestaurantData[],
    children?: React.ReactNode
}

export const Listing = ({title, listings}: ListingProps) => {
    return (
        <div>
            <Title>{title}</Title>
            <div>
                {
                    listings.map(listing => (
                      <RestaurantCard
                        {...listing}
                      />  
                    ))
                }
            </div>
        </div>
    )
}
