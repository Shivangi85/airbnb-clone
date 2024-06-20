import React from "react";
import Filter from "./Filter";
import { GiFishingBoat, GiMineExplosion } from "react-icons/gi";
import { ImKey } from "react-icons/im";
import { RiAliensFill } from "react-icons/ri";
import { BsFillTreeFill } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";

const Filters = () => {
    const sorting = [
        { title: "Icons", icon: <GiFishingBoat size={22}/> },
        { title: "Amazing Pools", icon: <GiMineExplosion size={22}/> },
        { title: "Amazing Views", icon: <RiAliensFill size={22}/> },
        { title: "Farms", icon: <ImKey size={22}/> },
        { title: "Rooms", icon: <BsFillTreeFill size={22}/> },
        { title: "Icons", icon: <GiFishingBoat size={22}/> },
        { title: "Amazing Pools", icon: <GiMineExplosion size={22}/> },
        { title: "Amazing Views", icon: <RiAliensFill size={22}/> },
        { title: "Farms", icon: <ImKey size={22}/> },
        { title: "Rooms", icon: <BsFillTreeFill size={22}/> },
        { title: "Icons", icon: <GiFishingBoat size={22}/> },
        { title: "Amazing Pools", icon: <GiMineExplosion size={22}/> }
    ];
    return (
        <div className="sm:mx-6 md:mx-10 lg:mx-12 flex items-center">
            <div className="flex justify-start gap-12 mt-4 text-gray-500 px-3 md:px-12 overflow-x-auto">
                {
                    sorting.map((obg) => (
                        <Filter title={obg.title} icon={obg.icon}/>
                    ))
                }
            </div>
                <div className="border-2 p-3 rounded-full mx-2 md:ml-5"><FaAngleRight /></div>
            
        </div>
    );
}

export default Filters;