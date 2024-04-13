import { peoples } from "../../../Components/Peoples/Peoples";
import useScroll from "../../../Hooks/useScroll";

const Peoples = () => {
  useScroll("peopleContainer");

  return (
    <div
      id="peopleContainer"
      className="h-[calc(100vh-94px)] overflow-y-scroll"
    >
      <div className="flex justify-between">
        <h1 className="text-4xl font-semibold">Peoples</h1>
        <p className="text-3xl">Total {peoples?.length}</p>
      </div>
      <div className="mt-5 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 xl:gap-4">
        {peoples?.map((people, index) => (
          <div key={`peoples${index}`} className="p-3 bg-white">
            <img
              className="w-full h-[150px] xl:h-[240px] mx-auto object-cover"
              src={people?.img}
              alt={people?.name}
            />
            <h2 className="text-2xl font-semibold text-center mt-5">
              {people?.name}
            </h2>
            <div className="flex flex-col xl:flex-row gap-1 mt-4">
              <button className="xl:flex-1 p-3 bg-green-400 text-sm rounded-lg uppercase hover:bg-green-600 transition-all">
                Make Friend
              </button>
              <button className="uppercase xl:flex-1 p-3 bg-slate-300 hover:bg-slate-400 transition-all text-sm rounded-lg">
                Message
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Peoples;
