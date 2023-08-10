import Item from "../models/Item";

interface Props {
  headerTitle: string;
  items: Item[];
}

function ScrollableSection(props: Props) {
  return (
    <section className="mt-8 font-bold text-lg bg-[#121212] p-3">
      <header className="flex flex-row items-center justify-between">
        <h1>{props.headerTitle}</h1>
        <a className="font-bold text-xs text-[#b3b3b3]">Mostrar tudo</a>
      </header>
      <ul className="flex flex-row gap-3 mt-6 overflow-x-scroll">
        {props.items.map((item, index) => {
          return (
            <li
              key={index}
              className="flex flex-col gap-3 p-4 bg-[#181818] rounded-md hover:bg-[#282828] transition delay-100"
            >
              {/* <img src="" alt="" /> */}
              <div className="bg-gray-300 min-w-[184px] min-h-[184px] rounded-md"></div>
              <p className="font-bold text-sm">{item.title}</p>
              <p className="text-sm font-normal text-[#a7a7a7]">
                {item.description}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default ScrollableSection;
