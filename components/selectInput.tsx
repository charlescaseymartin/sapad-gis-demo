"use client";

import { useState } from "react";

type ItemOption = {
  id: number;
  name: string;
}

type SelectMenuType = {
  isOpen: boolean;
  optionList: ItemOption[];
  onItemSelection: (id: number) => void;
}

type SelectItemType = {
  item: ItemOption;
  selectItem: (id: number) => void;
}

function SelectItem({ item, selectItem }: SelectItemType) {
  return (
    <li onClick={() => selectItem(item.id)} className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9 hover:bg-indigo-600 hover:text-white" role="option">
      <div className="flex items-center">
        <img src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
        <span className="font-normal ml-3 block truncate">{item.name}</span>
      </div>
    </li>
  )
}

function SelectMenu({ isOpen, optionList, onItemSelection }: SelectMenuType) {
  return isOpen && (
    <ul className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" tabIndex={-1} role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
      {optionList.map((options) => <SelectItem item={options} selectItem={onItemSelection} />)}
    </ul>
  )
}

export default function SelectInput() {
  const options: ItemOption[] = [
    { id: 1, name: "Tom Cook" },
    { id: 2, name: "Wade Cooper" },
    { id: 3, name: "Bruce Wayne" }
  ];
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<ItemOption>(options[0]);

  const toggleDropdownMenu = () => {
    return isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
  }

  const onSelectItem = (id: number) => {
    if(selectedOption.id === id) return;
    const newOption = options.find((option => option.id === id))
    if(newOption) setSelectedOption(newOption);
  }

  return (
    <div className="w-1/2">
      <label id="listbox-label" className="block text-sm font-medium leading-6 text-gray-900">Protected Areas</label>
      <div className="relative mt-2">
        <button type="button" onClick={toggleDropdownMenu} className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
          <span className="flex items-center">
            <span className="ml-3 block truncate">{selectedOption.name}</span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clipRule="evenodd" />
            </svg>
          </span>
        </button>
        <SelectMenu isOpen={isMenuOpen} optionList={options} onItemSelection={onSelectItem} />
      </div>
    </div>

  )
}