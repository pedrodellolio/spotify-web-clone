import MusicPlayer from "./components/MusicPlayer";
import Playlists from "./components/Playlists";
import ScrollableSection from "./components/ScrollableSection";
import Item from "./models/Item";
import Playlist from "./models/Playlist";
import cover1 from "./assets/cover1.jpg";
import cover2 from "./assets/cover2.jpg";
import cover3 from "./assets/cover3.jpg";
import cover4 from "./assets/cover4.jpg";
import cover5 from "./assets/cover5.webp";
import likedSongs from "./assets/likedSongs.png";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";

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
  {
    imgUrl:
      "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebd9d7ab6e3c47d94d6dead136/1/en/default",
    title: "Daily Mix 1",
    description: "Ashes Remain, Marc Martel, A Day To Remember and more",
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
    type: "playlist",
  },
  {
    title: "Minha playlist nº15",
    coverUrl: cover3,
    songs: [],
    type: "playlist",
  },
  {
    title: "2022",
    coverUrl: cover2,
    songs: [],
    type: "playlist",
  },
  {
    title: "Boom Boom Room (Side B)",
    coverUrl: cover4,
    songs: [],
    type: "playlist",
  },
  {
    title: "Liked Songs",
    coverUrl: likedSongs,
    songs: [],
    type: "playlist",
  },
  {
    title: "NF",
    coverUrl: cover5,
    songs: [],
    type: "artist",
  },
  {
    title: "Boom Boom Room (Side B)",
    coverUrl: cover4,
    songs: [],
    type: "playlist",
  },
  {
    title: "Liked Songs",
    coverUrl: likedSongs,
    songs: [],
    type: "playlist",
  },
  {
    title: "NF",
    coverUrl: cover5,
    songs: [],
    type: "artist",
  },
  {
    title: "Boom Boom Room (Side B)",
    coverUrl: cover4,
    songs: [],
    type: "playlist",
  },
  {
    title: "Liked Songs",
    coverUrl: likedSongs,
    songs: [],
    type: "playlist",
  },
  {
    title: "NF",
    coverUrl: cover5,
    songs: [],
    type: "artist",
  },
  {
    title: "Boom Boom Room (Side B)",
    coverUrl: cover4,
    songs: [],
    type: "playlist",
  },
  {
    title: "Liked Songs",
    coverUrl: likedSongs,
    songs: [],
    type: "playlist",
  },
  {
    title: "NF",
    coverUrl: cover5,
    songs: [],
    type: "artist",
  },
];

function App() {
  const [bgColor, setBgColor] = useState(defaultBgColor);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  useEffect(() => {
    const section = document.getElementById("bgSection");
    if (section) {
      section.className = "duration-[1000ms]";
      section.style.backgroundColor = bgColor;
    }
  }, [bgColor]);

  return (
    <>
      <NavBar items={playlists} isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <div className="bg-[#121212] m-2 rounded-lg mb-[88px] lg:ml-[400px]">
        <main>
          <section id="bgSection" className="duration-[1000ms]">
            <div className="bg-gradient-to-b from-[#0009] to-[#121212] p-3">
              <header className="mt-1">
                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-row gap-3">
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
                    <button
                      onClick={() => setIsMenuOpen(true)}
                      className="lg:hidden rounded-full p-2 bg-[#000000b2]"
                    >
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
                  </div>

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
              <Playlists
                items={playlists.slice(0, 6)}
                changeColor={setBgColor}
              />
            </div>
          </section>
          <ScrollableSection headerTitle="Made for phdellolio" items={items} />
          <ScrollableSection headerTitle="Recently played" items={items} />
          <ScrollableSection
            headerTitle="Discover Picks For You"
            items={items}
          />
        </main>
        <footer className="flex flex-col gap-10 p-4 mt-16">
          <div>
            <h2 className="font-bold mb-1">Company</h2>
            <ul className="leading-8 font-medium text-[#a7a7a7]">
              <li>About</li>
              <li>Jobs</li>
              <li>For the Record</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold mb-1">Communities</h2>
            <ul className="leading-8 font-medium text-[#a7a7a7]">
              <li>For Artists</li>
              <li>Developers</li>
              <li>Advertising</li>
              <li>Investors</li>
              <li>Vendors</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold mb-1">Useful links</h2>
            <ul className="leading-8 font-medium text-[#a7a7a7]">
              <li>Support</li>
              <li>Free Mobile App</li>
            </ul>
          </div>

          <ul className="flex flex-row gap-4">
            <li className="rounded-full bg-[#292929] p-3">
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
                  d="M8 1.44c2.136 0 2.389.009 3.233.047.78.036 1.203.166 1.485.276.348.128.663.332.921.598.266.258.47.573.599.921.11.282.24.706.275 1.485.039.844.047 1.097.047 3.233s-.008 2.389-.047 3.232c-.035.78-.166 1.204-.275 1.486a2.654 2.654 0 01-1.518 1.518c-.282.11-.706.24-1.486.275-.843.039-1.097.047-3.233.047s-2.39-.008-3.232-.047c-.78-.035-1.204-.165-1.486-.275a2.477 2.477 0 01-.921-.599 2.477 2.477 0 01-.599-.92c-.11-.282-.24-.706-.275-1.486-.038-.844-.047-1.096-.047-3.232s.009-2.39.047-3.233c.036-.78.166-1.203.275-1.485.129-.348.333-.663.599-.921a2.49 2.49 0 01.92-.599c.283-.11.707-.24 1.487-.275.843-.038 1.096-.047 3.232-.047L8 1.441zm.001-1.442c-2.172 0-2.445.01-3.298.048-.854.04-1.435.176-1.943.373a3.928 3.928 0 00-1.417.923c-.407.4-.722.883-.923 1.417-.198.508-.333 1.09-.372 1.942C.01 5.552 0 5.826 0 8c0 2.172.01 2.445.048 3.298.04.853.174 1.433.372 1.941.2.534.516 1.017.923 1.417.4.407.883.722 1.417.923.508.198 1.09.333 1.942.372.852.039 1.126.048 3.299.048 2.172 0 2.445-.01 3.298-.048.853-.04 1.433-.174 1.94-.372a4.087 4.087 0 002.34-2.34c.199-.508.334-1.09.373-1.942.039-.851.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.853-.174-1.433-.372-1.94a3.924 3.924 0 00-.923-1.418A3.928 3.928 0 0013.24.42c-.508-.197-1.09-.333-1.942-.371-.851-.041-1.125-.05-3.298-.05l.001-.001z"
                ></path>
                <path
                  fill="#fff"
                  d="M8 3.892a4.108 4.108 0 100 8.216 4.108 4.108 0 000-8.216zm0 6.775a2.668 2.668 0 110-5.335 2.668 2.668 0 010 5.335zm4.27-5.978a.96.96 0 100-1.92.96.96 0 000 1.92z"
                ></path>
              </svg>
            </li>
            <li className="rounded-full bg-[#292929] p-3">
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
                  d="M13.54 3.889a2.968 2.968 0 001.333-1.683 5.937 5.937 0 01-1.929.738 2.992 2.992 0 00-.996-.706 2.98 2.98 0 00-1.218-.254 2.92 2.92 0 00-2.143.889 2.929 2.929 0 00-.889 2.15c0 .212.027.442.08.691a8.475 8.475 0 01-3.484-.932A8.536 8.536 0 011.532 2.54a2.993 2.993 0 00-.413 1.523c0 .519.12 1 .361 1.445.24.445.57.805.988 1.08a2.873 2.873 0 01-1.373-.374v.04c0 .725.23 1.365.69 1.92a2.97 2.97 0 001.739 1.048 2.937 2.937 0 01-1.365.056 2.94 2.94 0 001.063 1.5 2.945 2.945 0 001.77.603 5.944 5.944 0 01-3.77 1.302c-.243 0-.484-.016-.722-.048A8.414 8.414 0 005.15 14c.905 0 1.763-.12 2.572-.361.81-.24 1.526-.57 2.147-.988a9.044 9.044 0 001.683-1.46c.5-.556.911-1.155 1.234-1.798a9.532 9.532 0 00.738-1.988 8.417 8.417 0 00.246-2.429 6.177 6.177 0 001.508-1.563c-.56.249-1.14.407-1.738.476z"
                ></path>
              </svg>
            </li>
            <li className="rounded-full bg-[#292929] p-3">
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
                  d="M16 8a8 8 0 10-9.25 7.903v-5.59H4.719V8H6.75V6.237c0-2.005 1.194-3.112 3.022-3.112.875 0 1.79.156 1.79.156V5.25h-1.008c-.994 0-1.304.617-1.304 1.25V8h2.219l-.355 2.313H9.25v5.59A8.002 8.002 0 0016 8z"
                ></path>
              </svg>
            </li>
          </ul>

          <hr className="border-[#ffffff1a]" />
        </footer>
      </div>
      <MusicPlayer />
    </>
  );
}

export default App;
