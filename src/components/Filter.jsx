import React from "react";

const Filter = ({icon, title}) => {
    return(
        <div className="filters grid justify-items-center">
            <span className="icon ">{icon}</span>
            {/* {icon} */}
            <span className="title text-[13px] font-semibold">{title}</span>
            {/* {title} */}
        </div>
    )
};

export default Filter;