"use client"

import {
  BookOpen,
  Info,
  FileText,
  BookCopy,
  GalleryVerticalEnd,
  Search,
  BookMarked,
  ScrollText,
  Newspaper,
  Menu,
  X,
  Moon,
  Sun,
} from "lucide-react"
import { useEffect, useState } from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"

export function LibrarySidebar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isActive = (path: string) => {
    return pathname === path
  }

  const menuItems = [
    {
      title: "Home",
      icon: BookOpen,
      href: "/",
    },
    {
      title: "About",
      icon: Info,
      href: "/about",
    },
    {
      title: "Rules & Regulations",
      icon: ScrollText,
      href: "/rules",
    },
    {
      title: "Syllabi",
      icon: FileText,
      href: "/syllabi",
    },
    {
      title: "E-Resources",
      icon: BookCopy,
      href: "/e-resources",
    },
    {
      title: "Gallery",
      icon: GalleryVerticalEnd,
      href: "/gallery",
    },
    {
      title: "OPAC",
      icon: Search,
      href: "/opac",
    },
    {
      title: "E-Books",
      icon: BookMarked,
      href: "/e-books",
    },
    {
      title: "Library Policy",
      icon: FileText,
      href: "/policy",
    },
    {
      title: "Journals",
      icon: Newspaper,
      href: "/journals",
    },
  ]

  return (
    <>
      <div className="md:hidden flex items-center justify-between h-16 px-4 border-b bg-background z-10 sticky top-0">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          <Link href="/" className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <span className="font-semibold">College Library</span>
          </Link>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="ml-auto"
        >
          {mounted && theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-background md:hidden"
          >
            <div className="flex h-16 items-center justify-between px-4 border-b">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
                <span className="font-semibold">Menu</span>
              </div>
            </div>
            <div className="overflow-y-auto h-[calc(100vh-4rem)]">
              <div className="flex flex-col gap-1 p-2">
                {menuItems.map((item) => (
                  <Button
                    key={item.title}
                    variant={isActive(item.href) ? "default" : "ghost"}
                    className="justify-start gap-2 h-12"
                    asChild
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Link href={item.href}>
                      <item.icon className="h-5 w-5" />
                      {item.title}
                    </Link>
                  </Button>
                ))}
              </div>
              <div className="p-4 border-t mt-4">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>GS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Guest Student</p>
                    <p className="text-xs text-muted-foreground">student@college.edu</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Sidebar className="hidden md:flex">
        <SidebarHeader className="flex items-center h-16 px-6 border-b">
          <Link href="/" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="font-semibold">College Library</span>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild isActive={isActive(item.href)} className="transition-all duration-200">
                  <Link href={item.href}>
                    <item.icon className="h-5 w-5" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="border-t p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback>GS</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Guest Student</p>
                <p className="text-xs text-muted-foreground">student@college.edu</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {mounted && theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </SidebarFooter>
      </Sidebar>
    </>
  )
}

