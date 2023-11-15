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

interface dashboardSidebarInterface {
  items?: dashboardSidebarItem[]
}

export function DashboardSidebar({ items }: dashboardSidebarInterface) {
  return (
    <Command className="border rounded-none max-w-[15rem] h-screen">
      <CommandList>
        <Accordion type="multiple" className="w-full">
          {items?.length ? (
            <>
              {items?.map(
                (item: any, index: any) => {
                  item.content?.length ? (
                    <>
                      <AccordionItem key={index} value={item.title}>
                        <AccordionTrigger className="m-1 font-normal px-2 py-1.5 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground rounded-md">{item.title}</AccordionTrigger>
                        <AccordionContent>
                          <CommandGroup>
                            {item.content?.length ? (
                              <>
                                {item.content?.map(
                                  (contentItem: any, contentIndex: any) =>
                                    <Link href={contentItem.href} key={`${index} ${contentIndex}`}>
                                      <CommandItem>
                                        <IconComponent type="radix" />
                                        <span className="text-md">{contentItem.title}</span>
                                        <CommandShortcut>{contentItem.shortcut}</CommandShortcut>
                                      </CommandItem>
                                    </Link>
                                )}
                              </>
                            ) : null}
                          </CommandGroup>
                        </AccordionContent>
                      </AccordionItem>
                    </>
                  ) : 2
                }
              )}
            </>
          ) : null}
        </Accordion>
      </CommandList>
    </Command>
  )
}