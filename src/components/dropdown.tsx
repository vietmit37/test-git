import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import React, { useState } from 'react';

interface DropdownProps {
  subTitle: string,
  titleSeclectDefault: string,
  dataOptions: string[],
}
const Dropdown = ({ subTitle, titleSeclectDefault, dataOptions }:DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [value, setValue] = useState(titleSeclectDefault ?? 'yee');
  const handleClose = (e:any) => {
    if (e.target.id === 'screen') {
      setIsOpen(false);
    }
  };
  return (
    <div className="relative">
      <div onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? 'border-blue-300' : 'border-gray-300'} flex-col bg-white px-3 w-full font-bold rounded-lg text-lg tracking-wider border-[4px] active:border-blue-300`}>
        <div className="text-[14px] font-thin">{subTitle}</div>
        <div className="flex justify-between items-center">
          {value}
          <div>
            {isOpen
              ? <AiOutlineCaretUp />
              : <AiOutlineCaretDown />}
          </div>
        </div>
      </div>
      {isOpen
          && (
            <>
              <div className="fixed w-full h-screen top-0 left-0 right-0 z-[99999] bg-black opacity-[.3]" id="screen" onClick={handleClose} />
              <div className="cursor-pointer p-3 z-[999999] absolute top-[70px] left-0 w-full bg-white rounded-lg">
                {dataOptions?.map((item) => (
                  <div
                    onClick={() => {
                      setValue(item);
                      setIsOpen(false);
                    }}
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </>

          )}

    </div>
  );
};

export default Dropdown;
