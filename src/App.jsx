import React,{useState,useRef,useEffect} from 'react'
import Head from "./components/Head";

import FormatBar from "./components/formatBar/FormatBar";

import TextArea from "./components/TextArea";
import { color, highlight, fontSize, fontfamily, zoomData } from "./atom/atom";
import { useRecoilValue } from "recoil";

const App = () => {
   let fontColor = useRecoilValue(color);
   let bgColor = useRecoilValue(highlight);
   let fontDataSize = useRecoilValue(fontSize);
   let fontDatafamily = useRecoilValue(fontfamily);

   const [selectedAction, setSelectedAction] = useState("p");
   const [content, setContent] = useState("");
    const divRef = useRef();
  
   useEffect(() => {
     const range = document.createRange();
     const target = divRef.current;

     range.selectNodeContents(target);
     range.collapse(false);
     const selection = window.getSelection();
     selection.removeAllRanges();
     selection.addRange(range);
   }, [content]);
 

 const onChange = (event) => {
  
  setContent(
    `<${selectedAction} 
    style="background-color:${bgColor};
    font-size:${fontDataSize}px;
    color:${fontColor};
    font-family:${fontDatafamily}">
    
    ${event.target.innerText}
    </${selectedAction}>`
  );
  
  console.log(selectedAction)
  console.log(content);

 };
  function handleClick(value) {
    console.log(value)
   setSelectedAction(value);
  }
  
  return (
    <div>
      <Head />

      <FormatBar onClick={handleClick} />

      <TextArea handleClick={onChange} content={content} divRef={divRef} />
    </div>
  );
};

export default App;
