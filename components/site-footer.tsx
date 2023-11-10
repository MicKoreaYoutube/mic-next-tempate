'use client';

import Link from "next/link"

import { siteConfig } from "@/config/site"

import { cn } from "@/lib/utils"

import { buttonVariants } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

const items = siteConfig.footerContent

export function SiteFooter() {
  return (
    <footer className="bg-accent z-40 w-full border-t font-RixInooAriDuriR">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center space-x-2">
              <Icons.logo className="h-6 w-6" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{siteConfig.name}</span>
            </Link>
            <p className="mt-4 max-w-[400px] text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-24 sm:grid-cols-3">
            {siteConfig.footerContent?.length ? (
              <>
                {siteConfig.footerContent?.map(
                  (item: any, index: any) =>
                    <div key={index}>
                      <h2 className="mb-6 text-2xl font-semibold text-foreground uppercase">{item.title}</h2>
                      <ul className="text-muted-foreground font-medium">
                        {item.content?.length ? (
                          <>
                            {item.content?.map(
                              (item: any, index: any) =>
                                <li className="mb-4" key={index}>
                                  <a href={item.href} className="hover:underline">{item.title}</a>
                                </li>
                            )}
                          </>
                        ) : null}
                      </ul>
                    </div>
                )}
              </>
            ) : null}
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-muted-foreground sm:text-center">© 2023 <Link href="/" className="hover:underline">{siteConfig.name}™</Link>. All Rights Reserved.</span>
          <nav className="flex items-center space-x-1">
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="패밀리 서비스" />
              </SelectTrigger>
              <SelectContent className="font-RixInooAriDuriR">
                <SelectGroup>
                  <SelectLabel>패밀리 서비스</SelectLabel>
                  {
                    siteConfig.FamilySurvice?.length ? (
                      siteConfig.FamilySurvice?.map(
                        (item: any, index: any) =>
                          item.href && (
                            <SelectItem value={item.name}>
                              <Link
                                key={index}
                                href={item.href}
                                className={cn(
                                  "font-medium",
                                  item.disabled && "cursor-not-allowed opacity-80"
                                )}
                              >
                                {item.name}
                              </Link>
                            </SelectItem>
                          )
                      )
                    ) : null}
                </SelectGroup>
              </SelectContent>
            </Select>
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
                <Icons.gitHub className="h-5 w-5" />
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
                <Icons.instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </div>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </footer>
  )
}