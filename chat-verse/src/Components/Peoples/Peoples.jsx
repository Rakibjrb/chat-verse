import { Link } from "react-router-dom";
import useScroll from "../../Hooks/useScroll";

const peoples = [
  { img: "https://i.ibb.co/5x441PC/user.png", name: "Rakibul Hasan" },
  { img: "https://i.ibb.co/5x441PC/user.png", name: "Refayet Hasan" },
  { img: "https://i.ibb.co/5x441PC/user.png", name: "Sihan Hasan" },
  { img: "https://i.ibb.co/5x441PC/user.png", name: "Fuad Hasan" },
  { img: "https://i.ibb.co/5x441PC/user.png", name: "Midul Hosen" },
  { img: "https://i.ibb.co/5x441PC/user.png", name: "Rakibul Hasan" },
  { img: "https://i.ibb.co/5x441PC/user.png", name: "Mank Rohoman" },
  { img: "https://i.ibb.co/5x441PC/user.png", name: "Rakibul Hasan" },
  { img: "https://i.ibb.co/5x441PC/user.png", name: "Refayet Hasan" },
  { img: "https://i.ibb.co/5x441PC/user.png", name: "Sihan Hasan" },
  { img: "https://i.ibb.co/5x441PC/user.png", name: "Fuad Hasan" },
  { img: "https://i.ibb.co/5x441PC/user.png", name: "Midul Hosen" },
  { img: "https://i.ibb.co/5x441PC/user.png", name: "Rakibul Hasan" },
  { img: "https://i.ibb.co/5x441PC/user.png", name: "Mank Rohoman" },
  { img: "https://i.ibb.co/5x441PC/user.png", name: "Rakibul Hasan" },
  { img: "https://i.ibb.co/5x441PC/user.png", name: "Refayet Hasan" },
  { img: "https://i.ibb.co/5x441PC/user.png", name: "Sihan Hasan" },
  { img: "https://i.ibb.co/5x441PC/user.png", name: "Fuad Hasan" },
  { img: "https://i.ibb.co/5x441PC/user.png", name: "Midul Hosen" },
  { img: "https://i.ibb.co/5x441PC/user.png", name: "Rakibul Hasan" },
  { img: "https://i.ibb.co/5x441PC/user.png", name: "Mank Rohoman" },
  { img: "https://i.ibb.co/5x441PC/user.png", name: "Rakibul Hasan" },
];

const Peoples = () => {
  useScroll("peoples");

  return (
    <div
      id="peoples"
      className="lg:max-h-[calc(100vh-94px)] lg:overflow-y-auto"
    >
      <h2 className="font-bold text-xl mb-2">Peoples</h2>
      <div className="space-y-4 border-t-2 py-3">
        {peoples?.map((people, index) => (
          <Link
            key={`peoplesindex${index}`}
            className="flex items-center gap-2"
          >
            <img
              className="w-8 h-8 xl:w-10 xl:h-10"
              src={people?.img || "https://i.ibb.co/5x441PC/user.png"}
              alt="user image"
            />
            <h2 className="uppercase xl:text-xl">
              {people?.name || "ChatVerse User"}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Peoples;
