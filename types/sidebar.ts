import React from "react"

export interface dashboardSidebarItem {
    title: string
    href?: string
    shortcut?: string
    content?: Array<{
        icon?: string
        title: string
        href: string
        shortcut?: string
        disabled?: boolean
    }>
}