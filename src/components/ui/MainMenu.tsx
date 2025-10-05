import { Link } from "react-router";

function MainMenu() {

    const menus = [
        {
            id: 1,
            link: "/",
            label: "HOME"
        },
        {
            id: 2,
            link: "/writer",
            label: "WRITERS"
        },
        {
           id: 3,
           link: "/pdf-book",
           label: "PDF-BOOKS-SIDE"
       },
        {
            id: 4,
            link: "/about",
            label: "ABOUT"
        },
    ]



    return (<ul className="flex items-center gap-6 text-sm">
        {menus.map(menu => (
            <li key={menu.id}>
                <Link
                    className="text-[#009689] transition hover:text-gray-400"
                    to={menu.link}
                >
                    {menu.label}
                </Link>
            </li>

        ))}


    </ul>);
}

export default MainMenu;
""
              