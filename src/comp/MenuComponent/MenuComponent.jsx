import React, { useState } from 'react'
import StyledMenuComponent from '../StyledMenuComponent/StyledMenuComponent';

const MenuComponent = (props) => {
    
    const [open, setOpen] = useState(true);
    return(
        <div style = {open ? {transition:"transform .2s ease 0s", transform: "translateX(200px)"} : {transition:"transform .2s ease 0s", transform: "translateX(0)"}}>
            <StyledMenuComponent assd={()=>{setOpen(!open); props.touhGamMenuAction(!props.touh_Gam_menu)}} />
            
        </div>
        
    )
}

export default MenuComponent
