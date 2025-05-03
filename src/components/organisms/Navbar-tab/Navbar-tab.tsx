import css from "./Navbar-tab.module.css";
import Button from "../../atoms/Button/Button";
import Bookmarking from "../../molecules/Features/Bookmarking/Bookmarking";
import Searching from "../../molecules/Features/Searching/Searching";
import Sharing from "../../molecules/Features/Sharing/Sharing";

import { JSX, useState } from "react";

interface Tab {
  label: string;
  content: JSX.Element | string;
}

const tabs: Tab[] = [
  { label: "Simple Bookmarking", content: <Bookmarking/> },
  { label: "Speedy Searching", content: <Searching/> },
  { label: "Easy Sharing", content: <Sharing/> },
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
