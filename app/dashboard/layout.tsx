'use client'

import { siteConfig } from "@/config/site"

import { DashboardSidebar } from "@/components/sidebar"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <div className="relative flex flex-row">
        <ResizablePanelGroup
          direction="horizontal"
        >
          <ResizablePanel defaultSize={15} maxSize={15} minSize={4}>
            <DashboardSidebar items={siteConfig.dashboardSidebarContent} />
          </ResizablePanel>
          <ResizableHandle withHandle/>
          <ResizablePanel>
            <div>{children}</div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  )
}
