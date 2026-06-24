import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="data:image/png;base64,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"
              alt="Bootstrap"
              height="50"
            ></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
            <div className="d-flex gap-1">
              <Link to="/" className="btn btn-primary">
                Register
              </Link>
              <Link to="/login" className="btn btn-success">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
