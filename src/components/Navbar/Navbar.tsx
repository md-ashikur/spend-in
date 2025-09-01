"use client";

import type { MenuProps } from "antd";
import { Menu, Button, Drawer, Grid } from "antd";
import { MenuOutlined } from "@ant-design/icons";
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
  const [drawerVisible, setDrawerVisible] = useState(false);
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

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
    setDrawerVisible(false); // Close drawer when menu item is clicked
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onDrawerClose = () => {
    setDrawerVisible(false);
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "100vw",
        overflow: "hidden",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <Header
        style={{
          width: "100%",
          maxWidth: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: isScrolled
            ? `${token.secondary700}CC`
            : "transparent",
          backdropFilter: isScrolled ? "blur(8px)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(8px)" : "none",
          boxShadow: isScrolled ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "none",
          transition: "all 0.3s ease",
          padding: "0 clamp(10px, 3vw, 20px)",
          margin: 0,
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        {/* Left: Logo */}
        <div style={{ fontWeight: "bold", fontSize: "clamp(16px, 3vw, 20px)" }}>
          <Link href="/" style={{ color: "#fff" }}>
            Spend.In
          </Link>
        </div>

        {/* Desktop Menu - Hidden on mobile/tablet */}
        {screens.lg && (
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Menu
              onClick={onClick}
              mode="horizontal"
              items={items}
              selectedKeys={[pathname]}
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: token.white,
              }}
              theme="dark"
            />
          </div>
        )}

        {/* Desktop Right - Login + Button */}
        {screens.lg && (
          <div
            style={{
              display: "flex",
              gap: 16,
              alignItems: "center",
            }}
          >
            <Link href="/login" style={{ color: "#fff" }}>
              Login
            </Link>
            <Button type="primary" onClick={() => router.push("/demo")}>
              Get Demo
            </Button>
          </div>
        )}

        {/* Mobile - Burger Menu Button */}
        {!screens.lg && (
          <Button
            type="text"
            icon={<MenuOutlined style={{ color: "#fff", fontSize: "18px" }} />}
            onClick={showDrawer}
            style={{
              border: "none",
              background: "transparent",
              boxShadow: "none",
            }}
          />
        )}
      </Header>

      {/* Mobile Drawer */}
      <Drawer
        title={
          <div style={{ color: token.primary500, fontWeight: "bold" }}>
            Spend.In
          </div>
        }
        placement="right"
        onClose={onDrawerClose}
        open={drawerVisible}
        width={280}
        styles={{
          body: {
            padding: 0,
            backgroundColor: token.secondary700,
          },
          header: {
            backgroundColor: token.secondary700,
            borderBottom: `1px solid ${token.secondary600}`,
          },
        }}
      >
        <Menu
          onClick={onClick}
          mode="vertical"
          items={items}
          selectedKeys={[pathname]}
          style={{
            backgroundColor: "transparent",
            border: "none",
          }}
          theme="dark"
        />

        {/* Mobile Login and Demo buttons */}
        <div
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <Button
            type="text"
            onClick={() => {
              router.push("/login");
              setDrawerVisible(false);
            }}
            style={{
              color: "#fff",
              textAlign: "left",
              justifyContent: "flex-start",
            }}
          >
            Login
          </Button>
          <Button
            type="primary"
            onClick={() => {
              router.push("/demo");
              setDrawerVisible(false);
            }}
            block
          >
            Get Demo
          </Button>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
