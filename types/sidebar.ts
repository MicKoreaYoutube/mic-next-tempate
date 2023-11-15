import React from "react"

export interface dashboardSidebarItem {
    title: string
    href?: string
    content?: [
        {
            icon?: React.ReactHTMLElement<any>
            title: string
            href: string
            shortcut?: string
            disabled?: boolean
        }
    ]
}