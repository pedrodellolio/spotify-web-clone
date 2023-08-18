import { useEffect } from "react";
import Playlist from "../models/Playlist";
import { useViewPort } from "../hooks/useViewPort";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  items: Playlist[];
}

const WINDOW_BREAKPOINT = 1024;

function NavBar(props: Props) {
  const { width } = useViewPort();

  useEffect(() => {
    if (width < WINDOW_BREAKPOINT) props.setIsOpen(false);
  }, [width]);
  console.log(props.isOpen);
  useEffect(() => {
    if (props.isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "scroll";
  }, [props.isOpen]);

  return (
    <div
      className={`${
        props.isOpen ? "block" : "hidden"
      } fixed justify-between gap-10 lg:block bg-[#121212] rounded-lg m-2 z-50 h-[calc(100%-96px)] overflow-y-scroll top-0 left-0 w-full lg:w-96`}
    >
      <div className="fixed bg-[#121212] w-full lg:w-96 p-5 z-10">
        <div className="flex flex-row gap-4 mb-8">
          <input
            className="bg-[#242424] w-full rounded-full p-3 px-6 text-sm"
            placeholder="What do you want to listen to?"
          ></input>
          <button
            onClick={() => props.setIsOpen(false)}
            className={`${
              width > WINDOW_BREAKPOINT ? "hidden" : "block"
            } rounded-full p-2 bg-[#000000b2]`}
          >
            X
          </button>
        </div>

        <div className="flex flex-row justify-between items-center">
          <h1 className="flex flex-row gap-3 font-semibold text-[#a7a7a7]">
            <svg
              role="img"
              height="24"
              width="24"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-encore-id="icon"
            >
              <path
                fill="#a7a7a7"
                d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"
              ></path>
            </svg>
            Your Library
          </h1>
          <button>
            <svg
              role="img"
              height="16"
              width="16"
              aria-hidden="true"
              viewBox="0 0 16 16"
              data-encore-id="icon"
            >
              <path
                fill="#a7a7a7"
                d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"
              ></path>
            </svg>
          </button>
        </div>

        <div className="mt-6">
          <ul className="flex flex-row gap-2">
            <li className="bg-[#232323] p-2 px-3 rounded-full text-sm">
              Playlists
            </li>
            <li className="bg-[#232323] p-2 px-3 rounded-full text-sm">
              Artists
            </li>
            <li className="bg-[#232323] p-2 px-3 rounded-full text-sm">
              Albums
            </li>
          </ul>
        </div>
      </div>
      <div>
        <ul className="px-5 mt-52">
          {props.items.map((item, i) => {
            return (
              <li key={i} className="flex flex-row gap-3 mb-6">
                <img
                  className={
                    item.type == "artist" ? "rounded-full" : "rounded-md"
                  }
                  height="48"
                  width="48"
                  src={item.coverUrl}
                />
                <div>
                  <h2>{item.title}</h2>
                  <div className="flex flex-row gap-1 text-sm font-medium text-[#a7a7a7]">
                    <p>
                      {item.type.charAt(0).toUpperCase() +
                        item.type.substring(1)}
                    </p>
                    {item.type === "playlist" && (
                      <>
                        <p className="font-bold">•</p>
                        <p>phdellolio</p>
                      </>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
