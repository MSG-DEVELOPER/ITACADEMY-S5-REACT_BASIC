import css from "./Navbar-tab.module.css";
import Button from "../../atoms/Button/Button";
import Bookmarking from "../../molecules/Features/Bookmarking/Bookmarking";

import { JSX, useState } from "react";

interface Tab {
  label: string;
  content: JSX.Element | string;
}

const tabs: Tab[] = [
  { label: "Simple Bookmarking", content: <Bookmarking/> },
  { label: "Speedy Searching", content: "Galería de imágenes." },
  { label: "Easy Sharing", content: "Formulario de contacto." },
];

function NavbarTab() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={css.container}>
      <div className={css.tabs} >

        {tabs.map((tab, index) => (
          <Button clas="navbar" key={tab.label} callback={() => setActiveTab(index)}>
            {tab.label}
          </Button>
        ))}

      </div>

      <div className={css.content}>{tabs[activeTab].content}</div>
    </div>
  );
}

export default NavbarTab;
