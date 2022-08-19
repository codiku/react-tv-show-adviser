import { StarFill } from "react-bootstrap-icons";
import s from "./style.module.css";
export function MovieDetail(props) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="row">
        <span className={s.title}>Stranger Things</span>
      </div>
      <div className="row">
        <div style={{ display: "flex", marginTop: 15 }}>
          {[1, 2, 3, 4, 5].map((i) => (
            <StarFill key={"star" + i} style={{ marginRight: 30 }} />
          ))}

          <span style={{ marginTop: 2 }}>9.7/10</span>
        </div>
      </div>
      <div className="row">
        <div className={`col-sm-12 col-md-8 ${s.description}`}>
          When a young boy vanishes, a small town uncovers a mystery involving
          secret experiments, terrifying supernatural forces, and one strange
          little girl. When a young boy vanishes, a small town uncovers a
          mystery involving secret experiments, terrifying supernatural
        </div>
      </div>
    </div>
  );
}
