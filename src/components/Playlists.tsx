import Playlist from "../models/Playlist";

interface Props {
  items: Playlist[];
}

function Playlists(props: Props) {
  return (
    <div className="mt-6">
      <ul className="grid grid-rows-3 grid-cols-2 grid-flow-row gap-3 gap-x-5">
        {props.items.map((item, index) => {
          return (
            <li
              key={index}
              className="flex flex-row items-center gap-3 bg-[#ffffff1a] rounded-md overflow-hidden hover:bg-[#fff3] transition delay-100"
            >
              {/* <img src="" alt="" /> */}
              <div className="bg-gray-300 p-8"></div>
              <p className="font-bold">{item.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Playlists;
