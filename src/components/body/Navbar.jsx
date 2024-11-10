import React from "react";
import { useDispatch } from "react-redux";
import { logo_text, Navbar_search_placeholder } from "../../utils/appText";
import TextLogo from "./TextLogo";
import SmallCircleShim from "../../shimmers/navbar/SmallCircleShim";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav
      className="Navbar flex justify-between p-2 border-b-2 border-purple-300 sticky top-0  
      sm:px-7"
    >
      <div className="Navbar-left flex gap-2 items-center">
        <TextLogo children={logo_text} />
      </div>
      <div
        className="Navbar-center hidden 
        sm:block border-2 border-purple-300 rounded-lg overflow-hidden"
      >
        <input
          className="h-full w-96 px-2 outline-none bg-transparent text-gray-700 "
          type="text"
          placeholder={Navbar_search_placeholder}
        />
        <button className="w-8 h-full text-white bg-purple-300">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      <div className="flex gap-2">
        <SmallCircleShim
          show="hidden"
          children={<FontAwesomeIcon icon={faSearch} />}
        />
        <SmallCircleShim children={<FontAwesomeIcon icon={faUser} />} />
      </div>
    </nav>
  );
};

export default Navbar;
