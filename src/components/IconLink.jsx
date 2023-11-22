import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function CustomLink({
  to,
  children,
  bg,
  theme,
  setTheme,
  ...props
}) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: false });

  if (isActive) {
    console.log("active");
    document.body.style.backgroundColor = bg;
    setTheme(theme);
  }
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
}
