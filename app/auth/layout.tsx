'use client'

import { siteConfig } from "@/config/site"

import { DocsSidebar } from "@/components/sidebar"

import { Icons } from "@/components/icons"

interface AuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <div className="flex w-full h-full lg:h-[94vh] justify-between">
        <div className="hidden lg:flex flex-col p-12 justify-between bg-primary dark:bg-accent basis-1/2">
          <span className="flex text-white text-lg font-medium font-KBO-Dia-Gothic_bold">
            <Icons.logo className="h-7 w-7" />
            &nbsp;
            {siteConfig.name}
          </span>
          <span className="text-white text-xl font-SUITE-Regular w-54">
            {siteConfig.description}
          </span>
        </div>
        <div className="h-full p-8 flex flex-col justify-start lg:justify-center basis-full lg:basis-1/2">
          {children}
        </div>
      </div>
    </>
  )
}