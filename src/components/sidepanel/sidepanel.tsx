import { FiHome } from "react-icons/fi";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { IoMdDesktop } from "react-icons/io";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { BsFileEarmarkMusic } from "react-icons/bs";
import { RiMovieLine } from "react-icons/ri";
import { GrFavorite } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Sidepanel() {
  return (
    <div className="sidepanel">
      <div className="app-name">
        <h3>Leo Explorer</h3>
      </div>
      <div className="sidepanel-items">
        <div className="home-container">
          <FiHome />
          <span className="home-text">Home</span>
        </div>
        <div className="photos-container">
          <MdOutlinePhotoSizeSelectActual />
          <span className="photos-text">Photos</span>
        </div>
        <div className="desktop-container">
          <IoMdDesktop />
          <span className="desktop-text">Desktop</span>
        </div>
        <div className="downloads-container">
          <PiDownloadSimpleBold />
          <span className="downloads-text">Downloads</span>
        </div>
        <div className="music-container">
          <BsFileEarmarkMusic />
          <span className="music-text">Music</span>
        </div>
        <div className="videos-container">
          <RiMovieLine />
          <span className="videos-text">Videos</span>
        </div>
        <div className="favorites-container">
          <GrFavorite />
          <span className="favorites-text">Favorites</span>
        </div>
        <div className="trash-container">
          <RiDeleteBin6Line />
          <span className="trash-text">Trash</span>
        </div>
      </div>
      <div className="drive-container">
        drive
      </div>
    </div>
  );
}
