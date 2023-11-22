import { Link, useRouteError } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Error = () => {
  const error = useRouteError();

  return (
    <section className="error-container">
      <div className="container">
        <h1>
          {error.status && error.statusText
            ? `${error.status.toLocaleString()} - ${error.statusText}`
            : ""}
        </h1>
        <pre>Sorry, page you are looking could not be found.</pre>
        <Link to="/" className="link">
          <FontAwesomeIcon icon={faArrowLeft} className="icon" />
          Back to Home Page
        </Link>
      </div>
    </section>
  );
};

export default Error;
