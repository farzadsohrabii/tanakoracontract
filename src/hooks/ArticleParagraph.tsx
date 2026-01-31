

// src/components/contract/ClauseParagraph.tsx
import React from "react";

type ArticleParagraphProps = {

    number: string | React.ReactNode;

    Article: string | React.ReactNode;
};

export default function ArticleParagraph({
    number,
    Article,
}: ArticleParagraphProps) {
    return (
        <div className="md:w-[30%] ----------- w-[34%]">

            <p className="font-bold ">{number}</p>
            <p className="md:text-3xl font-bold md:w-55 text-[14px] ">{Article}</p>

        </div>
    );
}




