const NameAndPhoto = () => {
  return (
    <div className="px-5 mt-8">
      <h2 className="text-2xl font-semibold">Update Name and Photo</h2>
      <form>
        <div className="mt-5">
          <label htmlFor="name">
            Enter new name
            <input
              className="w-full py-1 px-3 rounded-lg border border-black outline-none mt-2"
              type="text"
              name="name"
              id="name"
              placeholder="Type here..."
              required
            />
          </label>
        </div>
        <div className="mt-5">
          <label htmlFor="photo">
            Upload new photo here
            <input
              className="w-full border border-black rounded-lg p-1 mt-2 hover:cursor-pointer hover:bg-slate-200 transition-colors"
              type="file"
              name="photo"
              id="photo"
              required
            />
          </label>
        </div>
        <button className="w-full py-3 rounded-lg text-xl uppercase font-semibold mt-6 bg-green-400 hover:bg-green-600 transition-all hover:text-white">
          Update
        </button>
      </form>
    </div>
  );
};

export default NameAndPhoto;
