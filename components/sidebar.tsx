import Link from "next/link"

import { dashboardSidebarItem } from "@/types/sidebar"

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

export function DashboardSidebar({ items }: any) {
  return (
    <Command className="border rounded-none max-w-[15rem] h-screen">
      <CommandList className="h-full">
        <Accordion type="multiple" className="w-full h-full">
          {items?.length ? (
            <>
              {items?.map(
                (item: any, index: any) =>
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
                                    {contentItem.icon}
                                    <span>{contentItem.title}</span>
                                    <CommandShortcut>{contentItem.shortcut}</CommandShortcut>
                                  </CommandItem>
                                </Link>
                            )}
                          </>
                        ) : null}
                      </CommandGroup>
                    </AccordionContent>
                  </AccordionItem>
              )}
            </>
          ) : null}
        </Accordion>
      </CommandList>
    </Command>
  )
}