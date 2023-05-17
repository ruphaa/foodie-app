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
        <div className="">
            <Title>{title}</Title>
            <div className="flex mt-4 gap-x-4 overflow-x-scroll">
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
