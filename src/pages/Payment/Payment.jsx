import { useRef, useState } from "react";
import { Header } from "../../components/Header/Header";
import s from "./Payment.module.css";

export const Payment = () => {
  const [cardExpiration, setCardExpiration] = useState("");
  const cardNumberRef = useRef(null);
  const cardCodeRef = useRef(null);
  const cardExpirationRef = useRef(null);

  const handleExpirationChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-digits
    if (value.length > 2) {
      value = value.slice(0, 2) + "/" + value.slice(2, 4); // Add slash after MM
    }
    setCardExpiration(value);
  };

  return (
    <div className={s.main_section}>
      <Header />

      <div style={{ marginTop: 100, display: "flex", flexDirection: "column", width: 400 }}>
        <input
          ref={cardNumberRef}
          type="text"
          maxLength="16"
          placeholder="Card Number"
          onInput={(e) => {
            if (e.target.value.length === 16) {
              cardCodeRef.current.focus();
            }
          }}
        />
        <input
          ref={cardCodeRef}
          type="text"
          maxLength="3"
          placeholder="Card Code"
          onInput={(e) => {
            if (e.target.value.length === 3) {
              cardExpirationRef.current.focus();
            }
          }}
        />
        <input
          ref={cardExpirationRef}
          value={cardExpiration}
          type="text"
          maxLength="5" // MM/YY format
          placeholder="Card Expiration (MM/YY)"
          onInput={handleExpirationChange}
        />
      </div>
    </div>
  );
};
