export type NavItemType = "linkList" | "link" | "mainLink";

export interface NavItem {
  type: NavItemType;
  title: string;
  href?: string;
  mainLink?: {
    logo?: boolean;
    title: string;
    description: string;
    href?: string;
  };
  linkList?: Array<{
    title: string;
    description: string;
    href: string;
  }>;
}
