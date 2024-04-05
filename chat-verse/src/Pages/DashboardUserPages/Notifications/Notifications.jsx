import { Link } from "react-router-dom";
import useScroll from "../../../Hooks/useScroll";

const notifications = [
  {
    img: "https://i.ibb.co/vwgbdfX/team-5.jpg",
    message: "Rakibul Hasan notifications Rakibul Hasan notifications",
    name: "Rakibul Hasan",
  },
  {
    img: "https://i.ibb.co/7KFKNTF/team-2.jpg",
    message:
      "Refayet Hasan Rakibul Hasan notifications Rakibul Hasan notifications",
    name: "Rakibul Hasan",
  },
  {
    img: "https://i.ibb.co/1JH5f58/team-8.jpg",
    message: "Sihan Hasan Rakibul Hasan notifications",
    name: "Rakibul Hasan",
  },
  {
    img: "https://i.ibb.co/jWgsr4Y/team-4.jpg",
    message:
      "Fuad Hasan Rakibul Hasan notifications Rakibul Hasan notifications",
    name: "Rakibul Hasan",
  },
  {
    img: "https://i.ibb.co/5x441PC/user.png",
    message:
      "Midul Hosen Rakibul Hasan notifications Rakibul Hasan notifications",
    name: "Rakibul Hasan",
  },
  {
    img: "https://i.ibb.co/vwgbdfX/team-5.jpg",
    message: "Rakibul Hasan Rakibul Hasan notifications",
    name: "Rakibul Hasan",
  },
  {
    img: "https://i.ibb.co/7KFKNTF/team-2.jpg",
    message: "Refayet Hasan Rakibul Hasan notifications",
    name: "Rakibul Hasan",
  },
  {
    img: "https://i.ibb.co/1JH5f58/team-8.jpg",
    message: "Sihan Hdfasfasf asdf aasan",
    name: "Rakibul Hasan",
  },
  {
    img: "https://i.ibb.co/jWgsr4Y/team-4.jpg",
    message: "Fuad Hasan Rakibul Hasan notifications",
    name: "Rakibul Hasan",
  },
  {
    img: "https://i.ibb.co/5x441PC/user.png",
    message: "Midul Hosen Rakibul Hasan notifications",
    name: "Rakibul Hasan",
  },
  {
    img: "https://i.ibb.co/vwgbdfX/team-5.jpg",
    message: "Rakibul Hasan Rakibul Hasan notifications",
    name: "Rakibul Hasan",
  },
  {
    img: "https://i.ibb.co/7KFKNTF/team-2.jpg",
    message:
      "Refayet Hasan Rakibul Hasan notifications Rakibul Hasan notifications",
    name: "Rakibul Hasan",
  },
  {
    img: "https://i.ibb.co/5x441PC/user.png",
    message: "Midul Hosen Rakibul Hasan notifications",
    name: "Rakibul Hasan",
  },
  {
    img: "https://i.ibb.co/vwgbdfX/team-5.jpg",
    message: "Rakibul Hasan Rakibul Hasan notifications",
    name: "Rakibul Hasan",
  },
  {
    img: "https://i.ibb.co/7KFKNTF/team-2.jpg",
    message:
      "Refayet Hasan Rakibul Hasan notifications Rakibul Hasan notifications test",
    name: "Rakibul Hasan",
  },
];

const Notifications = () => {
  useScroll("notificationsContainer");

  return (
    <div
      id="notificationsContainer"
      className="mt-1 h-[calc(100vh-93px)] bg-white p-2 overflow-y-scroll"
    >
      <div className="flex flex-col gap-5">
        {notifications?.map((notifi, index) => (
          <Link key={`notifications${index}`}>
            <div className="flex gap-4 items-start bg-slate-100 rounded-lg px-3 py-2">
              <img
                className="w-14 h-14 rounded-full"
                src={notifi?.img}
                alt="user image"
              />
              <div>
                <h3 className="text-xl font-semibold mb-1">{notifi?.name}</h3>
                <p>{notifi?.message}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
