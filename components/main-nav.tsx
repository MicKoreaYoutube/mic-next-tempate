'use client'

import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

interface MainNavProps {
  items?: NavItem[]
}

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigaitionMenuListItem
} from "@/components/ui/navigation-menu"
import { ScrollArea } from "@/components/ui/scroll-area"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          {items?.length ? (
            <>
              {items?.map(
                (item, index) => (
                  <NavigationMenuItem key={index}>
                    {item.type == "link" ? (
                      <Link href={`${item.href}`} className={`${navigationMenuTriggerStyle()} bg-transparent`}>
                          {item.title}
                      </Link>
                    ) : (
                      <>
                        <NavigationMenuTrigger className="bg-transparent">{item.title}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ScrollArea>
                            <ul className={`${item.type.includes("mainLink") ? "lg:grid-cols-[.75fr_1fr]" : "md:grid-cols-2"} grid gap-3 p-6 w-[300px] md:w-[400px] lg:w-[500px] max-h-[250px]`}>
                              {item.type.includes("mainLink") ? (
                                <li className="row-span-3">
                                  <NavigationMenuLink asChild>
                                    <Link className="flex h-full w-full select-none flex-col justify-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-4 no-underline outline-none focus:shadow-md"
                                      href={`${item.mainLink?.href}`}>
                                      <Icons.logo className={`h-6 w-6 ${item.mainLink?.logo ? null : "hidden"}`} />
                                      <div className="mb-2 mt-4 text-lg font-medium leading-tight">
                                        {item.mainLink?.title}
                                      </div>
                                      <p className="text-sm leading-tight text-muted-foreground">
                                        {item.mainLink?.description}
                                      </p>
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ) : null}
                              {item.linkList?.map(
                                (linkListItem, index) => (
                                  <NavigaitionMenuListItem
                                    key={index}
                                    title={linkListItem.title}
                                    href={linkListItem.href}
                                  >
                                    {linkListItem.description}
                                  </NavigaitionMenuListItem>
                                ))}
                            </ul>
                          </ScrollArea>
                        </NavigationMenuContent>
                      </>
                    )}
                  </NavigationMenuItem>
                )
              )}
            </>
          ) : null}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
