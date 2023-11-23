"use client";

import { useState } from "react";

type ItemOption = {
  id: string;
  name: string;
}

type SelectInputType = {
  selectedOption: any;
  options: any[];
  onSelectItem: (id: string) => void;
}

type SelectMenuType = {
  isOpen: boolean;
  optionList: any[];
  onItemSelection: (id: string) => void;
}

type SelectItemType = {
  item: any;
  selectItem: (id: string) => void;
}

function SelectItem({ item, selectItem }: SelectItemType) {
  return (
    <li onClick={() => selectItem(item.id)} className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9 hover:bg-indigo-600 hover:text-white" role="option" aria-selected>
      <div className="flex items-center">
        <span className="font-normal ml-3 block truncate">{item.properties.name}</span>
      </div>
    </li>
  )
}

function SelectMenu({ isOpen, optionList, onItemSelection }: SelectMenuType) {
  return isOpen && (
    <ul className="absolute z-20 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" tabIndex={-1} role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
      {optionList.map((option) => <SelectItem key={`${option.id}`} item={option} selectItem={onItemSelection} />)}
    </ul>
  )
}

export default function SelectInput({ selectedOption, options, onSelectItem }: SelectInputType) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdownMenu = () => {
    return isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
  }

  const onItemSelection = (id: string) => {
    onSelectItem(id);
    toggleDropdownMenu();
  }

  return (
    <div className="w-1/2">
      <label id="listbox-label" className="block text-sm font-medium leading-6 text-gray-900">Protected Areas</label>
      <div className="relative mt-2">
        <button type="button" onClick={toggleDropdownMenu} className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
          <span className="flex items-center">
            <span className="ml-3 block truncate">{selectedOption.properties.name}</span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clipRule="evenodd" />
            </svg>
          </span>
        </button>
        <SelectMenu isOpen={isMenuOpen} optionList={options} onItemSelection={onItemSelection} />
      </div>
    </div>

  )
}