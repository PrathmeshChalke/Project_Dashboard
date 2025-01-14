import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUsers,
  faUtensils,
  faBell,
  faComments,
  faCog,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";

const menuItems = [
  { label: "Dashboard", icon: faHome },
  { label: "Users", icon: faUsers },
  { label: "Restaurant", icon: faUtensils },
  { label: "Notification", icon: faBell },
  { label: "Feedback", icon: faComments },
  { label: "Masters", icon: faChartBar },
  { label: "Settings", icon: faCog },
];

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div
      className="sidebar bg-white h-100 p-3"
      style={{
        width: "250px",
        borderRight: "1px solid #eee",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Nav className="flex-column">
        {menuItems.map((item, index) => (
          <Nav.Link
            key={index}
            className={`mb-2 d-flex align-items-center text-muted sidebar-link ${
              activeItem === item.label ? "active" : ""
            }`}
            href={`#${item.label.toLowerCase()}`}
            aria-label={item.label}
            style={{
              transition: "color 0.2s, background-color 0.2s",
              padding: "10px",
              borderRadius: "5px",
            }}
            onClick={() => setActiveItem(item.label)}
            onMouseEnter={(e) => {
              const target = e.target as HTMLElement;
              target.style.backgroundColor = "#C4D9FF";
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement;
              target.style.backgroundColor = "transparent";
            }}
          >
            <FontAwesomeIcon icon={item.icon} className="me-3" size="lg" />
            {item.label}
          </Nav.Link>
        ))}
      </Nav>
    </div>
  );
};

export default Sidebar;
