import Link from "next/link"

import { Menu } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { Icons } from "@/components/icons"
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

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
import { buttonVariants, Button } from "@/components/ui/button"
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
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ThemeToggle } from "@/components/theme-toggle"

import { useInView } from "react-intersection-observer"

interface NavSheetProps {
  items?: NavItem[]
}

export function NavSheet({ items }: NavSheetProps) {

  const [FamilySurviceRef, FamilySurviceRefInView] = useInView({
    threshold: 1
  })

  const newArray = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="font-RixInooAriDuriR h-screen overflow-auto" id="tlqkf">
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
          <Accordion type="single" collapsible className="w-full">
            {items?.length ? (
              <>
                {items?.map(
                  (item, index) => (
                    <AccordionItem key={index} value={index.toString()}>
                      {item.href ? (
                        <Link href={`${item.href}`}>
                          {item.title}
                        </Link>
                      ) : (
                        <>
                          <AccordionTrigger className="bg-transparent">{item.title}</AccordionTrigger>
                          <AccordionContent>
                            <ScrollArea>
                              <ul className={`${item.mainLink ? "grid flex-row grid-cols-[2fr_1fr]" : "grid md:grid-cols-2"} gap-3 w-[300px] md:w-[400px] lg:w-[500px] max-h-[250px]`}>
                                {item.mainLink ? (
                                  <li>
                                    <div className="block-flex rounded-md transition duraition-700 hover:bg-accent">
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
                                    </div>
                                  </li>
                                ) : null}
                                <div className={`${item.mainLink ? "flex flex-col justify-between" : "grid grid-cols-2 gap-x-3 gap-y-1"}`}>
                                  {item.linkList?.map(
                                    (linkListItem, index) => (
                                      <Link className={`flex flex-col py-4 px-2 rounded-md transition duraition-700 hover:bg-accent`}
                                        key={index}
                                        href={linkListItem.href}
                                      >
                                        <span className="font-medium leading-tight">{linkListItem.title}</span>
                                        <span className="leading-tight text-muted-foreground">{linkListItem.description}</span>
                                      </Link>
                                    )
                                  )}
                                </div>
                              </ul>
                            </ScrollArea>
                          </AccordionContent>
                        </>
                      )}
                    </AccordionItem>
                  )
                )}
              </>
            ) : null}
          </Accordion>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                  {newArray.map((i, key) => (
                    <div className="block-flex py-4 px-2 rounded-md transition duraition-700 hover:bg-accent" key={key}>
                      <h1>Box {i}</h1>
                      <span className="text-muted-foreground">This is Box number {i}!</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <SheetFooter>
            <div className="flex flex-col">
              <span className="w-full text-sm text-muted-foreground">© 2023 <Link href="/" className="hover:underline">{siteConfig.name}™</Link>. All Rights Reserved.</span>
              <nav className="flex space-x-1">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">패밀리 서비스&nbsp;<FontAwesomeIcon icon={faChevronDown} className={`shrink-0 transition-transform duration-200 h-3 w-3 ${FamilySurviceRefInView ? "rotate-180" : null}`} /></Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-1 font-RixInooAriDuriR" ref={FamilySurviceRef}>
                    <DropdownMenuGroup>
                      <DropdownMenuLabel>패밀리 서비스</DropdownMenuLabel>
                      {siteConfig.FamilySurvice?.length ? (
                        siteConfig.FamilySurvice?.map(
                          (item, index) =>
                            <Link key={index} href={item.href}>
                              <DropdownMenuItem>
                                <span>{item.name}</span>
                              </DropdownMenuItem>
                            </Link>
                        )
                      ) : null}
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
                <div>
                  <Link
                    href={siteConfig.links.micGithub}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div
                      className={buttonVariants({
                        size: "icon",
                        variant: "ghost",
                      })}
                    >
                      <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </div>
                  </Link>
                  <Link
                    href={siteConfig.links.micInstagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div
                      className={buttonVariants({
                        size: "icon",
                        variant: "ghost",
                      })}
                    >
                      <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </div>
                  </Link>
                  <ThemeToggle />
                </div>
              </nav>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  )
}