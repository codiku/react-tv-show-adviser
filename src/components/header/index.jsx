import { SearchBar } from "../search-bar";
import { Logo } from "../logo";
export function Header() {
  return (
    <div className="row">
      <div className="col-4">
        <Logo />
      </div>
      <div className="col-md-12 col-lg-4 pull-3">
        <SearchBar />
      </div>
    </div>
  );
}
