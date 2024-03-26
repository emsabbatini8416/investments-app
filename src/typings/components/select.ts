export type SelectOptionItem = {
  value: string | number
  label: string
}

export type SelectProps = {
  label?: string,
  options: SelectOptionItem[]
} & React.SelectHTMLAttributes<HTMLSelectElement>

