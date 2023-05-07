import {Fragment, useState} from 'react'
import {formatBar} from "../../constants/commonData"
import styles from './FormatBar.module.css'

import TextArea from '../TextArea'


export default function FormatBar() {

  // const [selectedAction, setSelectedAction]=useState("")
  const [content, setContent]=useState("")



  function handleClick(action){
    console.log((action))
    // setSelectedAction(action)
    document.execCommand(action, false, "")
    setContent(content)
  }

  return (
    <Fragment>
    <div className={styles.formatBar}>
      <ul className={styles.formatBarIcons}>
        {formatBar.map((icon,index)=><li style={{margin: "0.3rem", color:"rgb(93, 91, 91)", fontSize: "10", cursor: "pointer"}} key={index} onClick={()=>handleClick(icon.tag)} >{icon.icons}</li>)}
      </ul>
    </div>
    <TextArea content={content} />
    </Fragment>
  )
}


// import RedoIcon from "@mui/icons-material/Redo";
// import FormatBoldIcon from "@mui/icons-material/FormatBold";
// import FormatItalicIcon from "@mui/icons-material/FormatItalic";
// import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
// import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
// import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
// import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
// import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
// import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
// import style from "../Navbar/Navbar.module.css"
// import SubscriptIcon from "@mui/icons-material/Subscript";
// import SuperscriptIcon from "@mui/icons-material/Superscript";
// import FormatIndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";
// import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";
// import StrikethroughSIcon from '@mui/icons-material/StrikethroughS';