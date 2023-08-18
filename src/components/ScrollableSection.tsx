import Item from "../models/Item";
import PlaySvg from "./icons/PlaySvg";

interface Props {
  headerTitle: string;
  items: Item[];
}

function ScrollableSection(props: Props) {
  return (
    <section className="mt-2 font-bold text-lg bg-[#121212] p-3">
      <header className="flex flex-row items-center justify-between text-xl">
        <h1 className="cursor-pointer hover:underline">{props.headerTitle}</h1>
        <a className="cursor-pointer font-bold text-xs text-[#b3b3b3] hover:underline">
          Show all
        </a>
      </header>
      <ul className="grid grid-flow-col justify-start gap-3 mt-7 overflow-x-scroll">
        {props.items.map((item, index) => {
          return (
            <li
              key={index}
              className="group flex flex-col gap-3 p-4 bg-[#181818] rounded-md hover:bg-[#282828] h-[310px] w-[223px] duration-300"
            >
              <div>
                <div className="relative">
                  <img
                    src={item.imgUrl}
                    width={223}
                    height={223}
                    className="rounded-md mb-4"
                  />
                  <button className="cursor-pointer absolute right-0 bottom-[-8px] m-2 rounded-full w-12 h-12 shadow-md shadow-gray-600 bg-green-500 flex justify-center items-center opacity-0 group-hover:opacity-100 group-hover:bottom-0 ease-linear duration-200 hover:bg-green-400 hover:scale-105">
                    <PlaySvg color="#000" />
                  </button>
                </div>
                {/* <div className="bg-gray-300 min-w-[191px] min-h-[191px] rounded-md"></div> */}
                <p className="font-bold text-sm mb-3">{item.title}</p>
                <p className="text-xs font-medium text-[#a7a7a7] leading-5">
                  {item.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default ScrollableSection;
