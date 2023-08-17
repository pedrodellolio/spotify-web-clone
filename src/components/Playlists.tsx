import { defaultBgColor } from "../App";
import Playlist from "../models/Playlist";

interface Props {
  items: Playlist[];
  changeColor: React.Dispatch<React.SetStateAction<string>>;
}

function Playlists(props: Props) {
  function getCoverColor(playlist: Playlist): Promise<string> {
    return new Promise((resolve) => {
      var img = new Image();
      img.src = playlist.coverUrl;
      img.crossOrigin = "anonymous";

      img.onload = function () {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0, img.width, img.height);
          const pixelData = ctx.getImageData(10, 10, 1, 1).data;
          const hex = rgbToHex(pixelData[0], pixelData[1], pixelData[2]);
          // const color = `rgb(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]})`;
          resolve(hex);
        } else {
          resolve(defaultBgColor);
        }
      };
    });
  }

  function rgbToHex(r: number, g: number, b: number) {
    return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
  }

  async function handleMouseEnter(playlist: Playlist) {
    const color = await getCoverColor(playlist);
    props.changeColor(color);
  }

  async function handleMouseLeave() {
    props.changeColor(defaultBgColor);
  }

  return (
    <div className="mt-6">
      <ul className="grid grid-rows-3 grid-cols-2 grid-co grid-flow-row gap-3 gap-x-5">
        {props.items.map((item, index) => {
          return (
            <li
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
              key={index}
              className="cursor-pointer pr-4 min-w-[200px] flex flex-row items-center gap-3 bg-[#ffffff1a] rounded-md overflow-hidden hover:bg-[#fff3] duration-300"
            >
              <img src={item.coverUrl} className="w-16 h-16" alt="" />
              {/* <div className="bg-red-500 p-8"></div> */}
              <p className="font-bold text-[0.89rem]">{item.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Playlists;
