import styles from "./TextArea.module.css";
import { useRecoilValue } from "recoil";
import { zoomData, TextAlign } from "../atom/atom";
const TextArea = ({ handleClick, content, divRef}) => {
   let zoomSize = useRecoilValue(zoomData);
   let text = useRecoilValue(TextAlign);

 console.log(text);
  
  return (
    <div className={styles.container}>
      <div
        style={{zoom:zoomSize,textAlign:text}}
        onKeyUp={handleClick}
        contentEditable
        className={styles.main}
        dangerouslySetInnerHTML={{
          __html: content,
        }}
        ref={divRef}
        data-placeholder="Type @ to insert"
      ></div>
    </div>
  );
};

export default TextArea;
