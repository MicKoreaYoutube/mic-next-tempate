'use client'

import { useState, useRef, useEffect } from "react"

import { dashboardSidebarContent } from "@/config/site"

import { DashboardSidebar } from "@/components/sidebar"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { ImperativePanelHandle } from "react-resizable-panels";

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {

  const dashboardSideBarRef = useRef<ImperativePanelHandle>(null)

  const [isCollapsed, changeCollapsedState] = useState()

  return (
    <>
      <div className="relative flex flex-row">
        <ResizablePanelGroup
          direction="horizontal"
          autoSaveId="persistence"
        >
          <ResizablePanel
            collapsible
            collapsedSize={4}
            minSize={7}
            defaultSize={13}
            maxSize={13}
            ref={dashboardSideBarRef}
            onCollapse={()=>{
              changeCollapsedState(true)
            }}
          >
            <DashboardSidebar items={dashboardSidebarContent} isCollapsed={dashboardSideBarRef.current?.isCollapsed()} />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel>
            <div>{children}</div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  )
}
