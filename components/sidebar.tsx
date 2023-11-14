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
import { Link } from "lucide-react"

interface dashboardSidebarInterface {
  items?: dashboardSidebarItem[]
}

export function DashboardSidebar({ items }: dashboardSidebarInterface) {
  return (
    <Command className="border rounded-none max-w-[15rem] max-h-screen">
      <CommandList>
        <Accordion type="multiple" className="w-full">
        {items?.length ? (
              <>
                {items?.map(
                  (item, index) =>
                    <AccordionItem key={index} value={item.title}>
                      <AccordionTrigger className="m-1 px-2 py-1.5 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground rounded-md">{item.title}</AccordionTrigger>
                      <AccordionContent>
                      <CommandGroup>
                        {item.content?.length ? (
                          <>
                            {item.content?.map(
                              (item: any, index: any) =>
                              <Link href={item.href}>
                                <CommandItem key={index}>
                                  {item.icon}
                                  <span>{item.title}</span>
                                  <CommandShortcut>{item.shortcut}</CommandShortcut>
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