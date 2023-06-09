/* eslint-disable no-unused-vars */
import { createRef, useEffect, useRef, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import "./TopBar.scss";
import { Badge } from "@mui/material";

const items = [
  {
    name: "Home",
    color: "#f44336",
    href: "/",
  },
  {
    name: "Tiers",
    color: "#e91e63",
    href: "/tiers",
  },
  {
    name: "Clips",
    color: "#673ab7",
    href: "/clips",
  },
  {
    name: "Liderboard",
    color: "#3f51b5",
    href: "/liderboard",
  },
];

export function TopBar() {
  const root = useRef();
  const first_indicator = useRef();
  const second_indicator = useRef();
  const arrItems = useRef(items.map(createRef));
  const [clickable, setClickable] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const animate = () => {
      const menuOffset = root.current?.getBoundingClientRect();
      const activeItem = arrItems.current[active].current;
      const { width, height, top, left } = activeItem.getBoundingClientRect();
      const settings = {
        x: left - menuOffset.x,
        y: top - menuOffset.y,
        width: width,
        height: height,
        backgroundColor: items[active].color,
        ease: "elastic.out(.7, .7)",
        duration: 0.8,
      };

      gsap.to(first_indicator.current, {
        ...settings,
      });

      gsap.to(second_indicator.current, {
        ...settings,
        duration: 1,
      });
    };
    animate();
    window.addEventListener("resize", animate);

    return () => {
      window.removeEventListener("resize", animate);
    };
  }, [active]);

  return (
    <div ref={root} className="menu">
      {items.map((item, index) => {
        if (item.name === "Tiers" || item.name === "Liderboard") {
          return (
            <Badge
              key={item.name}
              badgeContent="Cooming Soon"
              color="primary"
              sx={{
                "& .MuiBadge-badge": {
                  fontSize: "10px"
                },
              }}
            >
              <Link
                style={{ pointerEvents: clickable ? "" : "none" }}
                key={item.name}
                ref={arrItems.current[index]}
                className={`item ${active === index ? "active" : ""}`}
                onMouseEnter={() => {
                  setActive(index);
                }}
                to={item.href}
              >
                {item.name}
              </Link>
            </Badge>
          );
        } else {
          return (
            <Link
              key={item.name}
              ref={arrItems.current[index]}
              className={`item ${active === index ? "active" : ""}`}
              onMouseEnter={() => {
                setActive(index);
              }}
              to={item.href}
            >
              {item.name}
            </Link>
          );
        }
      })}
      <div ref={first_indicator} className="indicator" />
      <div ref={second_indicator} className="indicator" />

      <Link to="/login" className="center" style={{ color: "white" }}>
        <AccountCircleIcon />
      </Link>
    </div>
  );
}
