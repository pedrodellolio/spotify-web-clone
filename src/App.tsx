import MusicPlayer from "./components/MusicPlayer";
import Playlists from "./components/Playlists";
import ScrollableSection from "./components/ScrollableSection";
import Item from "./models/Item";
import Playlist from "./models/Playlist";
import cover1 from "./assets/cover1.jpg";
import cover2 from "./assets/cover2.jpg";
import cover3 from "./assets/cover3.jpg";
import cover4 from "./assets/cover4.jpg";
import likedSongs from "./assets/likedSongs.png";

import { useEffect, useState } from "react";

export const defaultBgColor = "#535353";
const items: Item[] = [
  {
    imgUrl:
      "https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/n5wftH_rg7FWdUwxogU_6Q==/UkItdHBSQi10cFJCLXRwUg==",
    title: "Discover Weekly",
    description:
      "Your weekly mixtape of fresh music. Enjoy new music and deep cuts picked for you. Updates every Monday.",
  },
  {
    imgUrl:
      "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebd9d7ab6e3c47d94d6dead136/1/en/default",
    title: "Daily Mix 1",
    description: "Ashes Remain, Marc Martel, A Day To Remember and more",
  },
];

const playlists: Playlist[] = [
  {
    title: "2023.2",
    coverUrl: cover1,
    songs: [],
  },
  {
    title: "Minha playlist nº15",
    coverUrl: cover3,
    songs: [],
  },
  {
    title: "2022",
    coverUrl: cover2,
    songs: [],
  },
  {
    title: "Boom Boom Room (Side B)",
    coverUrl: cover4,
    songs: [],
  },
  {
    title: "Liked Songs",
    coverUrl: likedSongs,
    songs: [],
  },
  // {
  //   title: "Playlist 6",
  //   songs: [],
  // },
];

function App() {
  const [bgColor, setBgColor] = useState(defaultBgColor);

  useEffect(() => {
    const section = document.getElementById("bgSection");
    if (section) {
      section.className = "duration-[1000ms]";
      section.style.backgroundColor = bgColor;
    }
  }, [bgColor]);

  return (
    <>
      <main className="bg-[#121212] m-2 rounded-lg">
        <section id="bgSection" className="duration-[1000ms]">
          <div className="bg-gradient-to-b from-[#0009] to-[#121212] p-3">
            <header className="mt-1">
              <div className="flex flex-row justify-between items-center">
                <button className="rounded-full p-2 bg-[#000000b2]">
                  <svg
                    role="img"
                    height="16"
                    width="16"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    data-encore-id="icon"
                  >
                    <path
                      fill="#9da3a7"
                      d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"
                    ></path>
                  </svg>
                </button>
                <div className="flex flex-row items-center gap-2">
                  <button className="font-bold text-xs bg-[#0000008a] rounded-full px-3 py-2 flex flex-row items-center gap-2 duration-100 hover:scale-[1.04]">
                    <svg
                      role="img"
                      height="16"
                      width="16"
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      data-encore-id="icon"
                    >
                      <path
                        fill="#fff"
                        d="M4.995 8.745a.75.75 0 0 1 1.06 0L7.25 9.939V4a.75.75 0 0 1 1.5 0v5.94l1.195-1.195a.75.75 0 1 1 1.06 1.06L8 12.811l-.528-.528a.945.945 0 0 1-.005-.005L4.995 9.805a.75.75 0 0 1 0-1.06z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z"
                      ></path>
                    </svg>
                    Install App
                  </button>
                  <button className="font-bold text-xs bg-[#0000008a] rounded-full px-2 py-2 flex flex-row items-center duration-100 hover:scale-[1.04]">
                    <svg
                      role="img"
                      height="16"
                      width="16"
                      aria-hidden="true"
                      data-testid="user-icon"
                      viewBox="0 0 16 16"
                      data-encore-id="icon"
                    >
                      <path
                        fill="#fff"
                        d="M6.233.371a4.388 4.388 0 0 1 5.002 1.052c.421.459.713.992.904 1.554.143.421.263 1.173.22 1.894-.078 1.322-.638 2.408-1.399 3.316l-.127.152a.75.75 0 0 0 .201 1.13l2.209 1.275a4.75 4.75 0 0 1 2.375 4.114V16H.382v-1.143a4.75 4.75 0 0 1 2.375-4.113l2.209-1.275a.75.75 0 0 0 .201-1.13l-.126-.152c-.761-.908-1.322-1.994-1.4-3.316-.043-.721.077-1.473.22-1.894a4.346 4.346 0 0 1 .904-1.554c.411-.448.91-.807 1.468-1.052zM8 1.5a2.888 2.888 0 0 0-2.13.937 2.85 2.85 0 0 0-.588 1.022c-.077.226-.175.783-.143 1.323.054.921.44 1.712 1.051 2.442l.002.001.127.153a2.25 2.25 0 0 1-.603 3.39l-2.209 1.275A3.25 3.25 0 0 0 1.902 14.5h12.196a3.25 3.25 0 0 0-1.605-2.457l-2.209-1.275a2.25 2.25 0 0 1-.603-3.39l.127-.153.002-.001c.612-.73.997-1.52 1.052-2.442.032-.54-.067-1.097-.144-1.323a2.85 2.85 0 0 0-.588-1.022A2.888 2.888 0 0 0 8 1.5z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <h1 className="tracking-tighter font-semibold text-white text-[2rem] mt-4">
                Good evening
              </h1>
            </header>
            <Playlists items={playlists} changeColor={setBgColor} />
          </div>
        </section>
        <MusicPlayer />
        <ScrollableSection headerTitle="Made for phdellolio" items={items} />
        <ScrollableSection headerTitle="Recently played" items={items} />
        <ScrollableSection headerTitle="Discover Picks For You" items={items} />
      </main>
    </>
  );
}

export default App;
