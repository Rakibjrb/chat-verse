import Peoples from "../../../Components/Peoples/Peoples";
import Contents from "./Contents";
import useScroll from "../../../Hooks/useScroll";

const HomePage = () => {
  useScroll("homepage");

  return (
    <div
      id="homepage"
      className="flex flex-col lg:flex-row items-start gap-8 lg:gap-2"
    >
      <div className="w-full lg:w-3/4">
        <Contents />
      </div>
      <div className="hidden lg:block w-full lg:w-1/4 bg-white rounded-md px-3 py-2 lg:px-2 lg:py-1">
        <Peoples />
      </div>
    </div>
  );
};

export default HomePage;
