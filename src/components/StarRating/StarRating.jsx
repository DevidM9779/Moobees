import { StarFill, StarHalf, Star as StarEmpty } from "react-bootstrap-icons"

export function StarRating({ rating }) {
    const fullStars = parseInt(rating)
    const halfStar = rating - fullStars >= 0.5 ? true : false 
    const emptyStars = halfStar ? 5 - (fullStars + 1) : 5 - fullStars

    let stars = []
    for (let i = 0; i<fullStars; i++) stars.push(<StarFill key={"star-fill"+i}/>)
    if (halfStar) stars.push(<StarHalf key={"star-half"}/>)
    for (let i = 0; i<emptyStars; i++) stars.push(<StarEmpty key={"star-empty"+i}/>)

    console.log(stars)
    return (
        <div>{stars}</div>
    )
}