export interface NavItem {
  type: "mainLinkAndLinkList" | "linkList" | "mainLink" | "link"
  title: string
  href?: string
  mainLink?: {
    logo?: boolean
    title: string
    description: string
    href?: string
  }
  linkList?: Array<{
    title: string
    description: string
    href: string
  }>
}
