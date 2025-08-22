"use client";

import type { MenuProps } from "antd";
import { Menu, Button } from "antd";
import { Header } from "antd/es/layout/layout";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { theme } from "antd";
import { useEffect, useState } from "react";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "products",
    label: "Products",
    children: [
      {
        key: "/products/item1",
        label: <Link href="/products/item1">Item 1</Link>,
      },
      {
        key: "/products/item2",
        label: <Link href="/products/item2">Item 2</Link>,
      },
    ],
  },
  {
    key: "/benefit",
    label: <Link href="/benefit">Benefit</Link>,
  },
  {
    key: "/how-it-works",
    label: <Link href="/how-it-works">How it Works</Link>,
  },
  {
    key: "pricing",
    label: <Link href="/pricing">Pricing</Link>,
  },
  {
    key: "company",
    label: "Company",
    children: [
      {
        key: "/company/item1",
        label: <Link href="/company/item1">Item 1</Link>,
      },
      {
        key: "/company/item2",
        label: <Link href="/company/item2">Item 2</Link>,
      },
    ],
  },
];

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { token } = theme.useToken();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onClick: MenuProps["onClick"] = (e) => {
    router.push(e.key);
  };

  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "full",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: isScrolled ? `${token.secondary700}CC` : "transparent", // CC adds 80% opacity
        backdropFilter: isScrolled ? "blur(8px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(8px)" : "none", // for Safari support
        boxShadow: isScrolled ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      {/* Left: Logo */}
      <div style={{ fontWeight: "bold", fontSize: 20}}>
        <Link href="/" style={{ color: "#fff" }}>
          Spend.In
        </Link>
      </div>

      {/* Center: Menu */}
      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <Menu
          onClick={onClick}
          mode="horizontal"
          items={items}
          selectedKeys={[pathname]}
          style={{
            backgroundColor: "transparent",
          }}
         
        />
      </div>

      {/* Right: Login + Button */}
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <Link href="/login" style={{ color: "#fff" }}>
          Login
        </Link>
        <Button type="primary" onClick={() => router.push("/demo")}>
          Get Demo
        </Button>
      </div>
    </Header>
  );
};

export default Navbar;
