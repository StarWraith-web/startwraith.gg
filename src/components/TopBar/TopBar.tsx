import { createRef, useEffect, useRef, useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import "./TopBar.scss";

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
    name: "Eventos",
    color: "#9c27b0",
    href: "/eventos",
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
  const root = useRef<HTMLInputElement>();
  const first_indicator = useRef();
  const second_indicator = useRef();
  const arrItems = useRef(items.map(createRef));
  const [active, setActive] = useState(0);

  useEffect(() => {
    const animate = () => {
      const menuOffset = root.current?.getBoundingClientRect();
      const activeItem: any = arrItems.current[active].current;
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
      
      {items.map((item, index) => (
        <Link
          key={item.name}
          ref={arrItems.current[index] as React.RefObject<HTMLAnchorElement>}
          className={`item ${active === index ? "active" : ""}`}
          onMouseEnter={() => {
            setActive(index);
          }}
          to={item.href}
        >
          {item.name}
        </Link>
      ))}
      <div ref={first_indicator} className="indicator" />
      <div ref={second_indicator} className="indicator" />

      <Link to="/login" className="center" style={{color: "white"}}>
        
        <AccountCircleIcon />
      </Link>    

    </div>
  );
}