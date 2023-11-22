import React from "react";
import { Link } from "react-router-dom";
import { DropdownDownIcon } from "../ui/icons/DropdownDownIcon";

export default function MobileNavLinkDropdown({text, linkTo, clickLink, children }) {
  const [isExpanded, setIsExpanded] = React.useState(false);

function handleDropdown() {
    setIsExpanded((prev) => {
        return !prev
    })
}

  return (
    <div>
      <span className="relative">
        <Link
          to={linkTo}
          className="text-base font-bold"
          onClick={clickLink}
        >
          {text}
        </Link>
        <button className={(isExpanded ? "rotate-180 " : "rotate-0") + " absolute -right-8 top-1/2 -translate-y-1/3 w-6 h-6 transition-transform"} onClick={handleDropdown}><DropdownDownIcon/></button>
      </span>
      <div className={(isExpanded ? "block " : "hidden ") + ""}>{children}</div>
    </div>
  );
}
