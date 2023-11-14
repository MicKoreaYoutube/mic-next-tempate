'use client'

import "@/styles/globals.css"
import "animate.css"

import { siteConfig } from "@/config/site.tsx"

import { DashboardSidebar } from "@/components/sidebar"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <div className="relative flex flex-row">
        <DashboardSidebar items={siteConfig.dashboardSidebarContent} />
        <div>{children}</div>
      </div>
    </>
  )
}
