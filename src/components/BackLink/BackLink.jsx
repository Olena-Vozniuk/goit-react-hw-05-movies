import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const BackLink = ({ to, children }) => {
  return (
    <Link to={to}>
      <HiArrowLeft size="22" />
      {children}
    </Link>
  );
};

export default BackLink;