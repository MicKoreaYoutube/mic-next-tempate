'use client'

import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { LoadingComp } from "@/components/loading-comp"

export default function DashboardPage() {
  return (
    <>
          <>
      <div className="flex h-[80vh] items-center justify-center bg-background">
        <section className="container flex flex-col space-y-4">
          <div role="status">
            <LoadingComp size={96}/>
            <span className="sr-only">Loading...</span>
          </div>
          <h1 className="font-KBO-Dia-Gothic_bold text-center text-6xl font-extrabold">loading...</h1>
        </section>
      </div>
    </>
    </>
  )
}
