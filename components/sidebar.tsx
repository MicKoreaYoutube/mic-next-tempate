'use client'

import Link from "next/link"

import { dashboardSidebarItem } from "@/types/sidebar"

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

import { useRouter, usePathname, useParams } from "next/navigation"

interface dashboardSidebarInterface {
  items?: dashboardSidebarItem[]
}

export function DashboardSidebar({ items }: dashboardSidebarInterface) {

  const router = useRouter()
  const pathName = usePathname()

  return (
    <>
      <Command className="border rounded-none max-w-[15rem] h-screen">
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