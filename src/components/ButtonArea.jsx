//the code for a functional component that will be used to display the buttons as an overlay when the user's device is small. This is checked by the useMediaQuery hook from react-responsive. These two buttons will scroll FullPage-JS up and down one slide. The code for this component is as follows:
import { useMediaQuery } from "@uidotdev/usehooks";

export default function ButtonArea(props) {
  return (
    <div id="overlay-button-area">
      <button
        className="overlay-button"
        onClick={() => props.api.moveSectionUp()}>
        {" "}
        Up{" "}
      </button>
      <button
        className="overlay-button"
        onClick={() => props.api.moveSectionDown()}>
        {" "}
        Down{" "}
      </button>
    </div>
  );
}
