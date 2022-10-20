import "./style.css";
import NotFoundIcon from "../../assets/images/not-found.svg";

const NotFound = () => {
  return (
    <div className="container text-center">
      <img src={NotFoundIcon} alt="" />
      <p className="text-center text-info fw-bold display-3">
        The Page Not Found
      </p>
    </div>
  );
};
export default NotFound;
