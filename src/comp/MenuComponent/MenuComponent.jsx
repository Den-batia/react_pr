import React, { useState } from 'react'
import StyledMenuComponent from '../StyledMenuComponent/StyledMenuComponent';

const MenuComponent = (props) => {
    
    const [open, setOpen] = useState(true);

    const callBody = () => {
        setOpen(!open)
        props.touhGamMenuAction(!props.touh_Gam_menu)
        if (open) {
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style = null
        }
    }

    return(
        <div style = {open ? {transition:"transform .2s ease 0s", transform: "translateX(200px)"} : {transition:"transform .2s ease 0s", transform: "translateX(0)"}}>
            <StyledMenuComponent assd={callBody} is_open={open}/>
            
        </div>
        
    )
}

export default MenuComponent
