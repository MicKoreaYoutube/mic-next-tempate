import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface dashboardSidebarItem {
    label: string
    content: Array<{
        icon?: IconProp
        title: string
        href?: string
        shortcut?: string
        semiDropDown?: Array<{
            icon?: IconProp
            title: string
            href?: string
            shortcut?: string
        }>
    }>
}