import { PropsWithChildren } from "react";

const Tile : React.FC<PropsWithChildren> = (props) => {
    return (
        <li className="border-2 border-orange-500 rounded-lg item p-5 transition grid grid-cols-1 justify-center justify-items-center hover:bg-slate-900 hover:text-slate-200">
            {props.children}
        </li>
    )
}

export default Tile;