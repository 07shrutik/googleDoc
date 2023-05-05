import { formatBar } from "../../constants/commonData";
import styles from "./FormatBar.module.css";
import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { color, highlight, styleData, TextAlign } from "../../atom/atom";
import { useRecoilState, useRecoilValue } from "recoil";

export default function FormatBar(props) {
  const [showPicker, setShowPicker] = useState(false);
  const [currentColor, setCurrentColor] = useRecoilState(color);
  const [tagstatus, settagStatus] = useState("");
  const [highlightColor, sethighlightColor] = useRecoilState(highlight);
  const [textAlign, setTextAlign] = useRecoilState(TextAlign);

  let stylefontData = useRecoilValue(styleData);

  const handleIconClick = (tag) => {
    settagStatus(tag);
    if (tag === "textcolor") {
      setShowPicker(!showPicker);
    } else if (tag === "Highlight-color") {
      setShowPicker(!showPicker);
    } else if (tag === "Styles") {
      if (stylefontData == "Heading 1") {
        props.onClick("h1");
      } else if (stylefontData == "Heading 2") {
        props.onClick("h2");
      } else if (stylefontData == "Heading 3") {
        props.onClick("h3");
      } else if (stylefontData == "Heading 4") {
        props.onClick("h4");
      } else if (stylefontData == "Normal Text") {
        props.onClick("p");
      } else if (stylefontData == "Title") {
        props.onClick("h2");
      } else if (stylefontData == "Subtitle") {
        props.onClick("sub");
      }
     
    } else if (tag == "left-align") {
      setTextAlign("right");
    } else {
      props.onClick(tag);
    }
  };

  const handleChangeColor = (color) => {
    if (tagstatus == "textcolor") {
      setCurrentColor(color.hex);
    } else if (tagstatus == "Highlight-color") {
      sethighlightColor(color.hex);
    }
  };

  return (
    <div>
      <ul className={styles.formatBarIcons}>
        {formatBar.map((icon) => (
          <li
            onClick={() => handleIconClick(icon.tag)}
            style={{
              margin: "0.3rem",
              color: "rgb(93, 91, 91)",
              fontSize: "10",
            }}
            key={icon.description}
          >
            {icon.icons}
          </li>
        ))}
      </ul>
      <div
        style={{
          position: "fixed",
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {showPicker && (
          <SketchPicker
            color={currentColor}
            onChangeComplete={handleChangeColor}
            className={styles.sketchPicker}
          />
        )}
      </div>
    </div>
  );
}
