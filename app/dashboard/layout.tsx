{/**
    <Command className="border rounded-none max-w-[15rem] max-h-screen">
      <CommandList>
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="m-1 px-2 py-1.5 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground rounded-md">Settings</AccordionTrigger>
            <AccordionContent>
              <CommandGroup>
                <CommandItem>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <span>Calendar</span>
                </CommandItem>
                <CommandItem>
                  <FaceIcon className="mr-2 h-4 w-4" />
                  <span>Search Emoji</span>
                </CommandItem>
                <CommandItem>
                  <RocketIcon className="mr-2 h-4 w-4" />
                  <span>Launch</span>
                </CommandItem>
              </CommandGroup>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="py-1.5">Is it styled?</AccordionTrigger>
            <AccordionContent>
              <CommandGroup>
                <CommandItem>
                  <PersonIcon className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
                  <span>Mail</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <GearIcon className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CommandList>
    </Command>
*/}