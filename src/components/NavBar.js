import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navLinks = links.map((link) => (
    <a key={link} href={`#${link}`}>
      {link}
    </a>
  ));

  return (
    <nav>
      <div className="nav-links">{navLinks}</div>
    </nav>
  );
}

export default NavBar;
