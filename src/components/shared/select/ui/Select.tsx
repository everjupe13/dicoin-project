import { Menu, MenuButton } from '@headlessui/react'
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/16/solid'
import clsx from 'clsx'
import { SyntheticEvent, useState } from 'react'

import { type SelectOption } from '../types'
import { SelectContent } from './SelectContent'
import { SelectItem } from './SelectItem'

export interface SelectProps {
  options: SelectOption[]
  selected?: SelectOption | string | null

  name?: string
  disabled?: boolean

  showClear?: boolean

  placeholder?: string
  emptyContentLabel?: string

  onChange: (value: SelectOption | null) => void
  onFocus?: () => void
  onBlur?: () => void
}

export function Select({
  options = [],
  selected,

  name,
  disabled,

  showClear = true,

  placeholder = 'Не выбрано',
  emptyContentLabel = 'Нет доступных опций',

  onChange
}: SelectProps) {
  const [activeOption, setActiveOption] = useState<SelectOption | null>(() =>
    selected
      ? options.find(option =>
          typeof selected === 'string'
            ? option.value === selected
            : option.value === selected.value
        ) || null
      : null
  )

  const isEmpty = options.length === 0
  const isSelected = Boolean(activeOption)

  const handleActiveChange = (value: SelectOption['value']) => {
    const newActiveOption = options.find(
      option => option.value === value
    ) as SelectOption

    setActiveOption(newActiveOption)
    onChange?.(newActiveOption)
  }

  const handleClear = (e: SyntheticEvent) => {
    e.preventDefault()

    setActiveOption(null)
    onChange?.(null)
  }

  return (
    <Menu>
      <MenuButton
        className={clsx(
          'rounded-6 flex min-w-[210px] items-stretch gap-10 px-12 py-6',
          'bg-background-modals data-[hover]:bg-background-modals-hover data-[open]:bg-background-modals-active',
          'font-medium text-white text-14',
          'focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white'
        )}
        disabled={disabled}
        name={name}
      >
        <span
          className={clsx(
            'flex flex-grow items-center text-left',
            !isSelected && 'text-white/60'
          )}
        >
          {activeOption?.label || placeholder}
        </span>
        <span className="flex items-stretch gap-x-2">
          {showClear && (
            <span
              className="flex-basis-[16px] group flex flex-shrink-0 flex-grow-0 items-center"
              onClick={handleClear}
            >
              <XMarkIcon className="h-16 w-16 fill-white/60 transition group-hover:fill-white" />
            </span>
          )}
          <span className="flex-basis-[16px] group flex flex-shrink-0 flex-grow-0 items-center">
            <ChevronDownIcon className="h-16 w-16 fill-white/60 transition group-hover:fill-white" />
          </span>
        </span>
      </MenuButton>

      <SelectContent
        showEmpty={true}
        isEmpty={isEmpty}
        emptyContentLabel={emptyContentLabel}
      >
        {options.map(option => (
          <SelectItem
            key={option.value}
            label={option.label}
            value={option.value}
            selected={
              activeOption ? activeOption.value === option.value : false
            }
            onChange={handleActiveChange}
          />
        ))}
      </SelectContent>
    </Menu>
  )
}
