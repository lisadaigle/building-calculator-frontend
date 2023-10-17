import axios from "axios";
import { useState } from "react";
import { Results } from "./Results";

export function FormIndex() {
  const [permitType, setPermitType] = useState("commercial");
  const [permitAmount, setPermitAmount] = useState(0);
  const [permitFee, setPermitFee] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = { permitType: permitType, fee: permitAmount };

    axios
      .post("http://localhost:3000/calculator", data)
      .then((response) => {
        setPermitFee(response.data.message);
      })

      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3> Type of Permit </h3>
        <label>
          <input
            type="radio"
            name="permitType"
            value="commercial"
            checked={permitType === "commercial"}
            onChange={() => setPermitType("commercial")}
          />
          Commercial
        </label>
        <label>
          <input
            type="radio"
            name="permitType"
            value="residential"
            checked={permitType === "residential"}
            onChange={() => setPermitType("residential")}
          />
          Residential
        </label>
        <p></p>
        <label>
          Please enter the estimated value of this project:
          <p></p>
          <input
            type="number"
            pattern="[0-9]"
            name="permitAmount"
            value={permitAmount}
            onChange={(e) => setPermitAmount(e.target.value)}
          />
        </label>
        <p>
          Note: In this context, value refers to the total cost of the project- materials and labor. Please include
          labor costs in your estimate, even if you are performing the work yourself.
        </p>
        <p>
          If the estimate is too low, the Building Official may request documentation, adjust the value to a reasonable
          amount, and charge additional fees accordingly.
        </p>
        <label>
          {" "}
          <input type="submit" name="submit button" value="Calculate" />{" "}
        </label>
      </form>

      <Results permitFee={permitFee} />
    </div>
  );
}
