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
        <Button class="navbar">FEATURES</Button>
        <Button class="navbar">PRICING</Button>
        <Button class="navbar">CONTACT</Button>
        <Button class="login">LOGIN</Button>
      </div>
      </header>
  );
}

export default NavbarHeader;
