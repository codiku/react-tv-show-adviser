import s from "./style.module.css";
import { StarFill, StarHalf, Star as StarEmpty } from "react-bootstrap-icons";

export function FiveStarRating({ rating }) {
  // Declare an empty JSX star list
  const starList = [];

  // Store number of filled stars
  const starFillCount = Math.floor(rating);

  // Store if yes or no there is a half star
  const hasHalfStar = rating - parseInt(rating) >= 0.5;

  //  Store the number of empty stars
  const emptyStarCount = 5 - starFillCount - (hasHalfStar ? 1 : 0);

  // Push the filled stars
  for (let i = 1; i <= starFillCount; i++) {
    starList.push(<StarFill key={"star-fill" + i} />);
  }
  // Push an half star if necessary
  if (hasHalfStar) {
    starList.push(<StarHalf key={"star-half"} />);
  }
  // Push the empty stars
  for (let i = 1; i <= emptyStarCount; i++) {
    starList.push(<StarEmpty key={"star-empty" + i} />);
  }

  // Render the star list
  return <div>{starList}</div>;
}
