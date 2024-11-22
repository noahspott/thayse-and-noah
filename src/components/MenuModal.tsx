import type { MenuItem } from "./Header.types";
import { FaXmark } from "react-icons/fa6";

interface MenuModalProps {
  menu: MenuItem[];
  setIsOpen: Function;
}

export default function MenuModal({ menu, setIsOpen }: MenuModalProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 flex h-screen w-screen items-center justify-center bg-white">
      <FaXmark className="text-primary-700 hover:text-accent-500 absolute right-4 top-8 text-3xl duration-200" />
      <ul className="flex flex-col gap-4">
        {menu.map((menuItem: MenuItem, key) => {
          return (
            <li key={key}>
              <a
                className="hover:text-accent-500 text-3xl font-medium duration-200"
                href={menuItem.href}
              >
                {menuItem.display}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
