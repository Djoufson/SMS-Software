import React, { useState } from "react";
import { Link } from "react-router-dom";

function SidebarP() {
  const [open, setOpen] = useState(true);
  const Menus = [
    {
      title: "Dashboard",
      src: "./src/assets/dashboard",
      link: "/home",
    },
    {
      title: "Tous les utilisateurs",
      src: "./src/assets/group",
      link: "/home/users",
    },
    {
      title: "Nouvel utilisateur",
      src: "./src/assets/new-account",
      link: "/home/register",
    },
    {
      title: "Se déconnecter",
      src: "./src/assets/turn-off",
      link: "/logout",
      gap: true,
    },
  ];

  return (
    <aside className="flex flex-col">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } duration-500 absolute top-0 left-0  h-screen p-3 m-0 bg-indigo-600`}
      >
        <img
          src="./src/assets/left-arrow.png"
          width="20"
          height="20"
          className={`${
            !open && "rotate-180"
          } absolute cursor-pointer bg-white rounded-full -right-4 top-9 w-7 border-2 border-indigo-600`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/school.png"
            alt=""
            width="40"
            height="60"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`${
              !open && "scale-0"
            } text-white origin-left duration-150 font-extrabold text-2xl`}
          >
            School Management System
          </h1>
        </div>

        <ul className="pt-6">
          {Menus.map((menu) => (
            <Link to={menu.link}>
              <li
                key={menu.link}
                className={`text-gray-200 flex items-center gap-x-4 cursor-pointer p-2  hover:bg-light-white active:bg-light-white ${
                  menu.gap ? "mt-14" : "mt-2"
                }`}
              >
                <img
                  src={`${menu.src}.png`}
                  width="20"
                  className=""
                  style={{ color: "white" }}
                />
                <span
                  className={`${
                    !open && "hidden"
                  } text-white origin-left duration-150`}
                >
                  {menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default SidebarP;