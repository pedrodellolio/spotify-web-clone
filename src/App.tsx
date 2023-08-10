import MusicPlayer from "./components/MusicPlayer";
import Playlists from "./components/Playlists";
import ScrollableSection from "./components/ScrollableSection";
import Item from "./models/Item";
import Playlist from "./models/Playlist";

const items: Item[] = [
  {
    imgUrl: "",
    title: "Daily Mix 1",
    description: "Ashes Remain, Marc Martel, Five Finger Death Punch e mais",
  },
  {
    imgUrl: "",
    title: "Daily Mix 2",
    description: "John Mayer, The Score, Twenty One Pilots e mais",
  },
];

const playlists: Playlist[] = [
  {
    title: "Playlist 1",
    songs: [],
  },
  {
    title: "Playlist 2",
    songs: [],
  },
  {
    title: "Playlist 3",
    songs: [],
  },
  {
    title: "Playlist 4",
    songs: [],
  },
  {
    title: "Playlist 5",
    songs: [],
  },
  {
    title: "Playlist 6",
    songs: [],
  },
];

function App() {
  return (
    <>
      <main className="bg-[#121212] m-2 rounded-lg">
        <section className="bg-[#535353]">
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
                  <button className="font-bold text-xs bg-[#0f151b] rounded-full px-3 py-2">
                    Instalar aplicativo
                  </button>
                  <button className="font-bold text-xs bg-[#0f151b] rounded-full px-3 py-2">
                    User
                  </button>
                </div>
              </div>
              <h1 className="font-bold text-white text-[2rem] mt-4">
                Boa noite
              </h1>
            </header>
            <Playlists items={playlists} />
          </div>
        </section>
        <MusicPlayer />
        <ScrollableSection headerTitle="Feito para phdellolio" items={items} />
        <ScrollableSection headerTitle="Discover Picks For You" items={items} />
        <ScrollableSection headerTitle="Tocados recentemente" items={items} />
      </main>
    </>
  );
}

export default App;
