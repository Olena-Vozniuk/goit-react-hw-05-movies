import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const BackLink = ({ to, children }) => {
  
  return (
    <Link to={to}>
      <HiArrowLeft size="22" />
      {children}
    </Link>
  );
};

export default BackLink;


BackLink.propTypes = {
  to: PropTypes.object.isRequired,
};
