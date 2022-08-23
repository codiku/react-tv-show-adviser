import { StarFill, StarHalf, Star } from "react-bootstrap-icons";

export function FiveStarRating({ rating }) {
  const starJSXElementList = [];
  const flooredRating = Math.floor(rating);

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      starJSXElementList.push(
        <StarFill key={"star" + i} style={{ marginRight: 10 }} />
      );
    } else {
      // add an half star if the rating has a decimal >= to 0.5
      if (i - 1 === flooredRating && rating - flooredRating >= 0.5) {
        starJSXElementList.push(
          <StarHalf key={"star" + i} style={{ marginRight: 10 }} />
        );
      } else {
        starJSXElementList.push(
          <Star key={"star" + i} style={{ marginRight: 10 }} />
        );
      }
    }
  }

  return starJSXElementList;
}
