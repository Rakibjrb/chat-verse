const ProfileCard = () => {
  return (
    <div className="p-5 font-rubik">
      <img
        className="w-24 h-24 rounded-full mx-auto"
        src={"https://i.ibb.co/5x441PC/user.png"}
        alt=""
      />
      <h2 className="text-center text-2xl font-semibold mt-6">Rakibul Hasan</h2>
      <p className="text-justify px-3 mt-4">
        rakibul hasan details rakibul hasan details rakibul hasan dgd details
        rakibul hasan details rakibul hasan details rakibul hasan details dsf
      </p>
      <div className="px-3 mt-4 space-y-3">
        <div className="flex justify-between">
          <h3 className="text-sm font-semibold">Email : </h3>
          <h3 className="text-sm font-semibold">rakibul@gmail.com</h3>
        </div>
        <div className="flex justify-between">
          <h3 className="text-sm font-semibold">Phone : </h3>
          <h3 className="text-sm font-semibold">01700000</h3>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
