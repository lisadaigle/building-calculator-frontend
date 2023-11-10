import PropTypes from "prop-types";
export function Results({ permitFee }) {
  return (
    <div id="feeResult" style={{ marginLeft: "20px", fontSize: "1.5em", fontWeight: "bold", color: "black" }}>
      <p></p>
      Your fee is <span id="placeholder">{permitFee}</span>
      <p></p>
      Fees can be submitted by check (payable to the Town of Beacon Falls) or online{" "}
      <a href="https://www.beaconfalls-ct.org/building-and-land-use/pages/credit-card-payments">here</a>.<p></p>
    </div>
  );
}

Results.propTypes = {
  permitFee: PropTypes.string.isRequired,
};
