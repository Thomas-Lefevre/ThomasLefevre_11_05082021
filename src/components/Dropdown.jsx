import dropdownUp from "../assets/flecheDropdownUp.svg"
import dropdownDown from "../assets/flecheDropdownDown.svg"
import { useState } from "react"

function Dropdown({ dropdownContent, children }) {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <div className="dropdown">
            {isOpen ? <div className="dropdown--open">
                <div onClick={toggle} className="dropdown__header">
                    <p className="dropdown__header__name">{dropdownContent}</p>
                    {isOpen ? <img className="dropdown__header__arrow" src={dropdownUp} alt="" />
                        : <img className="dropdown__header__arrow" src={dropdownDown} alt="" />
                    }
                </div>
                {isOpen &&
                    <div className="dropdown__content">
                        {children}
                    </div>
                }
            </div> : <div className="dropdown--close">
                <div onClick={toggle} className="dropdown__header">
                    <p className="dropdown__header__name">{dropdownContent}</p>
                    {isOpen ? <img className="dropdown__header__arrow" src={dropdownUp} alt="" />
                        : <img className="dropdown__header__arrow" src={dropdownDown} alt="" />
                    }
                </div>
                {isOpen &&
                    <div className="dropdown__content">
                        {children}
                    </div>
                }
            </div>
            }
        </div>
    )
}

export default Dropdown