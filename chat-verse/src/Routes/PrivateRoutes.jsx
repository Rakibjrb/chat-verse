import PropTypes from "prop-types";
import { ImSpinner9 } from "react-icons/im";
import useAuth from "../Hooks/auth/useAuth";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="w-full h-[100px] flex justify-center items-center">
        <ImSpinner9 className="animate-spin text-2xl" />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"} replace={true} />;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoutes;
