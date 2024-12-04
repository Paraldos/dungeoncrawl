import PropTypes from "prop-types";

const TwoColumnTable = ({ headline, arrayOfItems }) => {
  TwoColumnTable.propTypes = {
    headline: PropTypes.array.isRequired,
    arrayOfItems: PropTypes.array.isRequired,
  };

  return (
    <table>
      <thead>
        <tr>
          <th>{headline[0]}</th>
          <th>{headline[1]}</th>
        </tr>
      </thead>
      <tbody>
        {arrayOfItems.map((item, index) => (
          <tr key={index}>
            <td>{item[0]}</td>
            <td>{item[1]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TwoColumnTable;
