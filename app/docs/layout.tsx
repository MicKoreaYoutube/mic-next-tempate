'use client'

import { siteConfig } from "@/config/site"

import { DocsSidebar } from "@/components/sidebar"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <div className="relative flex flex-row">
        <DocsSidebar items={siteConfig.docsSidebarContent} />
        <div className="m-12">{children}</div>
      </div>
    </>
  )
}
