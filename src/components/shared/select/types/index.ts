export type SelectOption = {
  label: string
  value: string
}

export type SelectOptionParent = { label: string; children: SelectOption[] }

export type SelectOptions = (SelectOption | SelectOptionParent)[]
