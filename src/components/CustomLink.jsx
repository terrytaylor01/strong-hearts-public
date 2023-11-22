import React from "react";
import {Link, useMatch, useResolvedPath } from "react-router-dom";

export default function CustomLink({ to, children, bg, theme, setTheme, isListing, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: false });
  
  if (isActive && (!isListing)) {
    console.log("active")
    document.body.style.backgroundColor = bg;
    setTheme(theme)
  }
  return (
    <div
      className={
        (isActive
          ? "bg-skin-textprimary text-white transition-transform hover:scale-105 shadow-md"
          : "bg-transparent") + " rounded-3xl"
      }
    >
      <Link to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}
