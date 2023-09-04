import { GoChevronLeft, GoChevronDown } from "react-icons/go"
import { useState } from "react";

const ExpandablePanel = ({ header, children }) => {
    const [expandend, setExpandend] = useState(false)
    
   
    return (
        <div className="panelDiv">
            <div className="topArrangment">
                <div className="topArrangment">
                    {header}
                </div>

                <div onClick={() => setExpandend(!expandend)}>
                    {expandend ? (<GoChevronDown />) : (<GoChevronLeft />)}
                </div>
            </div>
            {
                expandend && <div>{children}</div>
            }

        </div>
    )
}

export default ExpandablePanel