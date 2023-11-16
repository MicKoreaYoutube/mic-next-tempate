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

export interface docsSidebarItem {
    title: string
    href?: string
    content?: Array<{
        title: string
        href: string
    }>
}