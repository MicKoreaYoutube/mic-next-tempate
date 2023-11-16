'use client'

import Link from "next/link"

import { dashboardSidebarItem, docsSidebarItem } from "@/types/sidebar"

import { IconComponent } from "./icons"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command"
import { ScrollArea } from "@/components/ui/scroll-area"

import { usePathname } from "next/navigation"

interface dashboardSidebarInterface {
  items?: dashboardSidebarItem[]
}

interface docsSidebarInterface {
  items?: docsSidebarItem[]
}

export function DashboardSidebar({ items }: dashboardSidebarInterface) {

  const pathName = usePathname()

  return (
    <>
      <Command className="border-r rounded-none max-w-[15rem] h-screen">
        <CommandList>
          <Accordion type="multiple" className="w-full font-TheJamsil5Bold">
            {items?.length ? (
              <>
                {items?.map(
                  (item, index) => (
                    <>
                      {item.content?.length ? (
                        <AccordionItem key={index} value={item.title}>
                          <AccordionTrigger className="m-1 font-normal px-2 py-1.5 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground rounded-md">
                            {item.title}
                          </AccordionTrigger>
                          <AccordionContent>
                            <CommandGroup>
                              <>
                                {item.content?.map(
                                  (contentItem, contentIndex) => (
                                    <Link href={contentItem.href} key={`${index} ${contentIndex}`}>
                                      <CommandItem className={`${index == 0 && contentIndex == 0 && pathName == "/dashboard/00" ? "bg-accent text-accent-foreground" : null}`}>
                                        <IconComponent type="radix" />
                                        <span className="text-md">{contentItem.title}</span>
                                        <CommandShortcut>{contentItem.shortcut}</CommandShortcut>
                                      </CommandItem>
                                    </Link>
                                  )
                                )}
                              </>
                            </CommandGroup>
                          </AccordionContent>
                        </AccordionItem>
                      ) : (
                        <Link href={`${item.href}`} key={index}>
                          <CommandItem className="m-1">
                            <IconComponent type="radix" />
                            <span className="text-md">{item.title}</span>
                            <CommandShortcut>{item.shortcut}</CommandShortcut>
                          </CommandItem>
                        </Link>
                      )}
                    </>
                  )
                )}
              </>
            ) : null}
          </Accordion>
        </CommandList>
      </Command>
    </>
  )
}

export function DocsSidebar({ items }: docsSidebarInterface) {

  const pathName = usePathname()

  return (
    <>
      <ScrollArea className="h-screen w-48">
        <div className="m-8">
          {items?.length ? (
            items.map(
              (item, index) => (
                <div key={index} className="py-4">
                  <Link href={`${item.href ? item.href : "#"}`} className="block my-3 text-lg font-bold font-KBO-Dia-Gothic_bold">{item.title}</Link>
                  {item.content?.length ? (
                    item.content.map(
                      (contentItem, contentIndex) => (
                        <Link key={contentIndex} href={contentItem.href} className="block my-1 text-md text-muted-foreground font-SUITE-Regular">{contentItem.title}</Link>
                      )
                    )
                  ) : null}
                </div>
              )
            )
          ) : null}
        </div>
      </ScrollArea>
    </>
  )
}
