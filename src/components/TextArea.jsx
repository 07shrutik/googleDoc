import {useState, useRef, useEffect} from 'react'

import styles from "./TextArea.module.css";

function TextArea({content}){
  // const [content, setContent]=useState("")

  // const cursorRef=useRef()
  // useEffect(()=>{
  //   const range=document.createRange()
  //   const target=cursorRef.current
  //   range.selectNodeContents(target)
  //   range.collapse(false)
  //   const selection=window.getSelection()
  //   selection.removeAllRanges()
  //   selection.addRange(range)
  // }, [content])

  // export const handleChange=()=>{
  //   console.log(selectedAction)
  //   document.execCommand(selectedAction, false, "")
  //   setContent(content)
    // console.log(e.target.value)
    // // let previousContent=content
    // console.log(cursorRef.current)
    // console.log(`<${selectedAction}>${e.target.innerText}</${selectedAction}>`)
    // setContent(`<${selectedAction}>${e.target.innerText}</${selectedAction}>`)
  // }

  // useEffect(()=>{
  //   console.log(selectedAction)
  //   document.execCommand(selectedAction, false, "")
  //   setContent(content)
  //   // console.log(e.target.value)
  //   // // let previousContent=content
  //   // console.log(cursorRef.current)
  //   // console.log(`<${selectedAction}>${e.target.innerText}</${selectedAction}>`)
  //   // setContent(`<${selectedAction}>${e.target.innerText}</${selectedAction}>`)
  // },[selectedAction])
  return (
    <div className={styles.container}>
      <div
      // ref={cursorRef}
        contentEditable
        className={styles.main}
        // onKeyUp={handleChange}
        // value={content}
        dangerouslySetInnerHTML={{ __html:content}}
        data-placeholder="Type @ to insert"
      ></div>
    </div>
  );
};

export default TextArea;
