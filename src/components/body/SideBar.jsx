import { faNoteSticky } from "@fortawesome/free-regular-svg-icons/faNoteSticky";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons/faHouseUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SideBar = () => {
  return (
    <aside
      className="fixed bottom-0 w-full py-1 bg-white border-t-2 border-purple-300  text-purple-500
        sm:block sm:sticky sm:top-4 sm:border-r-2 sm:px-4 sm:w-fit sm:border-t-0"
    >
      <ul
        className="flex justify-between px-3
          sm:flex sm:flex-col"
      >
        <li
          className="cursor-pointer
          sm:flex sm:justify-between sm:gap-6
          sm:w-32 sm:px-2 sm:p-1 sm:rounded-md sm:hover:bg-purple-200"
        >
          <div
            className="justify-items-center
            sm:row-start-2"
          >
            <FontAwesomeIcon size="xl" icon={faListUl} />
          </div>

          <span
            className="hidden text-nowrap
            sm:block sm:col-start-2 sm:row-start-2 "
          >
            Play List
          </span>
        </li>

        <li
          className="cursor-pointer
          sm:flex sm:justify-between sm:gap-6
          sm:w-32 sm:px-2 sm:p-1 sm:rounded-md sm:hover:bg-purple-200"
        >
          <div
            className="justify-items-center
            sm:row-start-1"
          >
            <div>
              <FontAwesomeIcon size="xl" icon={faHouseUser} />
            </div>
          </div>

          <span
            className="hidden 
            sm:block "
          >
            Home
          </span>
        </li>

        <li
          className="cursor-pointer
          sm:flex sm:justify-between sm:gap-6
          sm:w-32 sm:px-2 sm:p-1 sm:rounded-md sm:hover:bg-purple-200"
        >
          <div
            className="justify-items-center
            sm:row-start-3"
          >
            <div>
              <FontAwesomeIcon size="xl" icon={faNoteSticky} />
            </div>
          </div>

          <span
            className="hidden
            sm:block sm:row-start-3 sm:col-start-2"
          >
            Notes
          </span>
        </li>

      </ul>
    </aside>
  );
};

export default SideBar;
