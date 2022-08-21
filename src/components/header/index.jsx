import { SearchBar } from "../search-bar";
import { Logo } from "../logo";
import logo from "../../assets/images/logo.png";

export function Header(props) {
  return (
    <div className="row">
      <div className="col-4">
        <Logo image={logo} text="Watowatch" />
        <span style={{ marginLeft: 7, whiteSpace: "nowrap" }}>
          Find a show you may like
        </span>
      </div>
      <div className="col-md-12 col-lg-4 pull-3">
        <SearchBar onSubmit={props.onSubmitSearch} />
      </div>
    </div>
  );
}
