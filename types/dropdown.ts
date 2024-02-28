import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface dropDownItem {
  icon?: IconProp
  title: string
  href?: string
  shortcut?: string
  disable?: boolean
  semiDropDown?: dropDownItem[][]
}[]