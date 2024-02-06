import React from 'react'
import { GoChevronLeft, GoChevronDown } from "react-icons/go";
import { useState } from 'react';

function ExpandablePanel({children, header}) {

    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click);
    }

  return (
    <div className='panelDiv'> 
        <div className='topArrangement'>
            <div>
                {
                    header
                }
            </div>
            <div onClick={handleClick}>
                {
                    click ? (
                        <GoChevronDown  />
                    ) : (
                        <GoChevronLeft />
                    )
                }
            </div>
        </div>

        {
            click ? (
                <div>
                    {children}
                </div>
            ) : (
                <>
                </>
            )
        }
    </div>
  )
}

export default ExpandablePanel