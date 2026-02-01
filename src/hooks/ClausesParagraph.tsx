

// src/components/contract/ClauseParagraph.tsx
import React from "react";

type ClauseParagraphProps = {

  text?: string | React.ReactNode;

  note?: string | React.ReactNode;

  note2?: string | React.ReactNode;

  items?: Array<string | React.ReactNode>;

  listheader?:string | React.ReactNode;

  listClassName?:string | React.ReactNode;

  textDivClassName?:string | React.ReactNode;
};

export default function ClauseParagraph({
  text,
  note,
  note2,
  items,
  listheader,
  listClassName,
  textDivClassName,
}: ClauseParagraphProps) {
  return (
    <div  className={`mb-4 ${textDivClassName}`}>
      <p className="  md:text-[16px] text-[#000000c9] -------------- text-justify leading-6 text-[12px] ">
        {text}
      </p>
      {items && items.length > 0 && (
          <ul className="list-disc pr-5">
            <p className="md:mt-3 md:text-justify md:leading-6 md:text-[16px] text-[#000000c9] ------------- text-[12px]"> {listheader} </p>
            {items.map((item , index) => (
              <li className={`md:text-[16px] text-[#000000c9] ----------- text-[12px] ${listClassName}`} key={index}>
                {item}
              </li>
            ) ) }         
          </ul>
      )}

      <p className=" text-justify leading-6 pr-10 md:text-[13px] text-[#e47035eb] text-[12px]">
          {note}
      </p>
      <p className=" text-justify leading-6 pr-10 md:text-[13px] text-[#e47035eb] text-[12px]">
          {note2}
      </p>
    </div>
  );
}




