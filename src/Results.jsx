import PropTypes from "prop-types";

export function Results({ permitFee }) {
  return (
    <div id="feeResult">
      <p></p>
      Your fee is <span id="placeholder">{permitFee}</span>
      <p></p>
      <p></p>
    </div>
  );
}
Results.propTypes = {
  permitFee: PropTypes.number,
};
// export default Results;
