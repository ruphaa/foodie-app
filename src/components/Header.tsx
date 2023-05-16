
import { Button } from "./Button"
import { Title } from "./Title"

export const Header = () => {
    return (
        <div className="flex gap-x-2">
            <Title className="flex-1">Foodie</Title>
            <Button variant="secondary">Log in</Button>
            <Button variant="secondary">Sign up</Button>
        </div>
        
    )
}
