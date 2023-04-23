import { createRef, useEffect, useRef, useState } from "react";
import "./TopBar.scss";
import { gsap } from "gsap";

const items = [
  {
    name: "Home",
    color: "#f44336",
    href: "#",
  },
  {
    name: "Tiers",
    color: "#e91e63",
    href: "#",
  },
  {
    name: "Eventos",
    color: "#9c27b0",
    href: "#",
  },
  {
    name: "Clips",
    color: "#673ab7",
    href: "#",
  },
  {
    name: "Liderboard",
    color: "#3f51b5",
    href: "#",
  },
];

export function TopBar() {
  const root = useRef();
  const first_indicator = useRef();
  const second_indicator = useRef();
  const arrItems = useRef(items.map(createRef));
  const [active, setActive] = useState(0);

  useEffect(() => {
    const animate = () => {
      const menuOffset = root.current.getBoundingClientRect();
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
      {items.map((item, index) => (
        <a
          key={item.name}
          ref={arrItems.current[index]}
          className={`item ${active === index ? "active" : ""}`}
          onMouseEnter={() => {
            setActive(index);
          }}
          href={item.href}
        >
          {item.name}
        </a>
      ))}
      <div ref={first_indicator} className="indicator" />
      <div ref={second_indicator} className="indicator" />
    </div>
  );
}