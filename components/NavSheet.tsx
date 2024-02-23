import Link from "next/link"

import { Menu } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { Icons } from "@/components/icons"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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

interface NavSheetProps {
  items?: NavItem[]
}

export function NavSheet({ items }: NavSheetProps) {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="font-RixInooAriDuriR">
          <SheetHeader>
            <SheetTitle>
              <Link href="/" className="flex flex-row space-x-2">
                <Icons.logo className="h-6 w-6" />
                <span className="inline-block font-bold">{siteConfig.name}</span>
              </Link>
            </SheetTitle>
            <SheetDescription>
              {siteConfig.description}
            </SheetDescription>
          </SheetHeader>
          <div>
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col justify-start">
                {items?.length ? (
                  <>
                    {items?.map(
                      (item, index) => (
                        <NavigationMenuItem key={index} className="">
                          {item.href ? (
                            <Link href={`${item.href}`} className={`${navigationMenuTriggerStyle()} bg-transparent`}>
                              {item.title}
                            </Link>
                          ) : (
                            <>
                              <NavigationMenuTrigger className="bg-transparent">{item.title}</NavigationMenuTrigger>
                              <NavigationMenuContent>
                                <ScrollArea>
                                  <ul className={`${item.mainLink ? "lg:grid-cols-[.75fr_1fr]" : "md:grid-cols-2"} grid gap-3 p-6 w-[300px] md:w-[400px] lg:w-[500px] max-h-[250px]`}>
                                    {item.mainLink ? (
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
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  )
}