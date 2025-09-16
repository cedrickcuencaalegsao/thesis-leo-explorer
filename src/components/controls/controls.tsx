import { useEffect } from "react";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { IoClose } from "react-icons/io5";
import { TbMinimize } from "react-icons/tb";
import { TbMaximize } from "react-icons/tb";

export default function Controls() {
  useEffect(() => {
    const appWindow = getCurrentWindow();

    const minimize = () => appWindow.minimize();
    const maximize = () => appWindow.toggleMaximize();
    const close = () => appWindow.close();

    const minimizeButton = document.getElementById("titlebar-minimize");
    const maximizeButton = document.getElementById("titlebar-maximize");
    const closeButton = document.getElementById("titlebar-close");

    minimizeButton?.addEventListener("click", minimize);
    maximizeButton?.addEventListener("click", maximize);
    closeButton?.addEventListener("click", close);

    return () => {
      minimizeButton?.removeEventListener("click", minimize);
      maximizeButton?.removeEventListener("click", maximize);
      closeButton?.removeEventListener("click", close);
    };
  }, []);

  return (
    <>
      <div className="titlebar">
        <div data-tauri-drag-region></div>
        <div className="controls">
          <button id="titlebar-close" title="close">
            <IoClose />
          </button>
          <button id="titlebar-minimize" title="minimize">
            <TbMinimize />
          </button>
          <button id="titlebar-maximize" title="maximize">
            <TbMaximize />
          </button>
        </div>
      </div>
    </>
  );
}
