import React, { useState } from 'react'
import StyledMenuComponent from '../StyledMenuComponent/StyledMenuComponent';
import s from './MenuComponent.module.css'

const MenuComponent = () => {

    const [open, setOpen] = useState(true);
    
    return(
        <div>
            {open && <div>
                        <div className={s.asd}>
                            <button className={s.b} onClick={()=>{setOpen(false)}}>
                                <div className={s.div} />
                                <div className={s.div} />
                                <div className={s.div} />
                            </button>
                        </div> 
                    </div>
            
            }
        
            {open || <div>
                        <StyledMenuComponent st={open ? s.nav : s.nav1} assd={()=>{setOpen(true)}}/>
                        <div className = {s.asd}>
                            <button className = {s.b} onClick={()=>{setOpen(true)}}>
                                <div className={s.div} />
                                <div className={s.div} />
                                <div className={s.div} />
                            </button>
                        </div>
                    </div>
        }
        </div>
        
    )
}

export default MenuComponent
