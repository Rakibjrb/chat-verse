import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const data = {
    showSidebar,
    setShowSidebar,
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

DataProvider.propTypes = {
  children: PropTypes.node,
};
export default DataProvider;
