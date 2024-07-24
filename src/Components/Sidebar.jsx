import {
  IoStatsChartOutline,
  IoPersonOutline,
  IoSettingsOutline,
  IoChatbubbleEllipsesOutline,
  IoChevronBackOutline,
  IoChevronForwardOutline,
} from "react-icons/io5";
import { CgFileDocument } from "react-icons/cg";
import { HiOutlineLogout } from "react-icons/hi";
import { useState, useEffect } from "react";
import { firebaseAuth, useFirebase } from "../context/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import logo from "../../public/assets/EcoHiveWhite.png";
import ContactModal from "../Components/Contactus";
import { MdHomeRepairService } from "react-icons/md";
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

export const Sidebar = ({ entity, setSelectedComponent }) => {
  const navigate = useNavigate();
  const firebase = useFirebase();
  const [selected, setSelected] = useState("overview");
  const [user, setUser] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const getTextClass = (id) => {
    return selected === id ? "text-[#FE981E]" : "text-[#67698E]";
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("You are logged out");
        setUser(null);
      }
    });
  }, []);

  const handleSelection = (id) => {
    setSelected(id);
    setSelectedComponent(id);
  };

  return (
    <div
      className={`flex flex-col h-screen bg-[#1A3421] ${
        isCollapsed ? "w-20" : "w-1/5"
      } rounded-r-xl transition-width duration-300`}
    >
      <div className="text-white m-2 mt-9 flex items-center">
        <img src={logo} alt="Logo" className="h-12" />
        {!isCollapsed && (
          <span className="ml-2 mt-1 text-3xl font-semibold">EcoHive</span>
        )}
      </div>
      <div className="flex text-white items-center m-4 mb-8">
        <div className="flex items-center">
          <div className="relative flex items-center justify-center w-8 h-8 bg-green-700 rounded-full">
            <div className="font-bold text-xl">
              {user?.email[0].toUpperCase() || "U"}
            </div>
          </div>
          {!isCollapsed && (
            <div className="flex flex-col ml-2 text-sm font-semibold">
              <div>{user?.email || "User"}</div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col m-5 mt-0.5 space-y-6">
        <div
          className={`flex text-base ${getTextClass("overview")} items-center`}
        >
          <IoStatsChartOutline size={20} />
          {!isCollapsed && (
            <button className="ml-2" onClick={() => handleSelection("overview")}>
              Overview
            </button>
          )}
        </div>
        <div className={`flex flex-col text-base ${getTextClass("services")} items-start relative`}>
          <div className="flex items-center w-full">
            <MdHomeRepairService size={20} />
            {!isCollapsed && (
              <button className="ml-2 flex items-center w-full text-lg" onClick={toggleDropdown}>
                Services
                {isDropdownOpen ? (
                  <AiOutlineUp className="ml-1" size={10}/>
                ) : (
                  <AiOutlineDown className="ml-1" size={10}/>
                )}
              </button>
            )}
          </div>
          {isDropdownOpen && (
            <div className="flex flex-col ml-7 mt-2 items-start">
              <button
                className={`text-lg`}
                onClick={() => window.open('/tree', '_blank')}
              >
                Tree Plantation
              </button>
              <button
                className={`text-lg mt-2`}
                onClick={() => window.open('/agri', '_blank')}
              >
                Agriculture
              </button>
              <button
                className={`text-lg mt-2`}
                onClick={() => window.open('/water', '_blank')}
              >
                Water Management
              </button>
              <button
                className={`text-lg mt-2`}
                onClick={() => window.open('/air', '_blank')}
              >
                Air Pollution
              </button>
              {(entity === "org") && (<button
                className={`text-lg mt-2`}
                onClick={() => window.open('/mangrove', '_blank')}
              >
                Mangrove
              </button>)}
            </div>
          )}
        </div>
        <div
          className={`flex text-base ${getTextClass("events")} items-center`}
        >
          <CgFileDocument size={20} />
          {!isCollapsed && (
            <button className="ml-2" onClick={() => handleSelection("events")}>
              Events
            </button>
          )}
        </div>
        <div
          className={`flex text-base ${getTextClass("settings")} items-center`}
        >
          <IoSettingsOutline size={20} />
          {!isCollapsed && (
            <button className="ml-2" onClick={() => handleSelection("settings")}>
              Settings
            </button>
          )}
        </div>
      </div>
      <div className="text-[#67698E] flex m-5 flex-col justify-end flex-grow space-y-6">
        <div className="flex text-base items-center">
          <IoChatbubbleEllipsesOutline size={20} />
          {!isCollapsed && (
            <button className="ml-2" onClick={openModal}>
              Contact Us
            </button>
          )}
        </div>
        <div className="flex text-base text-[#FE981E] items-center">
          <HiOutlineLogout size={20} />
          {!isCollapsed && (
            <button
              className="ml-2"
              onClick={() => {
                firebase.logOut();
                navigate("/");
              }}
            >
              Log out
            </button>
          )}
        </div>
        <div className="flex align-middle mr-7">
          <button
            onClick={() => {
				setIsCollapsed(!isCollapsed)
				setIsDropdownOpen(false)
			}}
            className="ml-auto text-xl text-[#FE981E]"
          >
            {isCollapsed ? (
              <IoChevronForwardOutline />
            ) : (
              <IoChevronBackOutline />
            )}
          </button>
        </div>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={closeModal} entity={entity} />
    </div>
  );
};