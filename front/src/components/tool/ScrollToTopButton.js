import { Button } from "react-bootstrap";
import "./ScrollToTopButton.style.css";
import { goToTop } from "../../lib/goToTop";

export default function ScrollToTopButton() {
  return (
    <Button className="scroll-to-top-button" onClick={goToTop}>
      UP
    </Button>
  );
}
