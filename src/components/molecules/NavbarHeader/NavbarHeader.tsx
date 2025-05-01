import "./NavbarHeader.css";
import Button from "../../atoms/Button/Button";

function NavbarHeader() {
  //se compondrá de una img hardcodead y tres botones atomos
  return (
    <header>
      <div>
        <img src="/logo-bookmark.svg" alt="logo de empresa" />
      </div>
      <div>
        <Button clas="navbar">FEATURES</Button>
        <Button clas="navbar">PRICING</Button>
        <Button clas="navbar">CONTACT</Button>
        <Button clas="login">LOGIN</Button>

      </div>
      </header>
  );
}

export default NavbarHeader;
