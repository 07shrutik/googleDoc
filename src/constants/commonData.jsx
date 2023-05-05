import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import SpellcheckOutlinedIcon from '@mui/icons-material/SpellcheckOutlined';
import ImagesearchRollerOutlinedIcon from '@mui/icons-material/ImagesearchRollerOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import FormatBoldOutlinedIcon from '@mui/icons-material/FormatBoldOutlined';
import FormatItalicOutlinedIcon from '@mui/icons-material/FormatItalicOutlined';
import FormatUnderlinedOutlinedIcon from '@mui/icons-material/FormatUnderlinedOutlined';
import FormatColorTextOutlinedIcon from '@mui/icons-material/FormatColorTextOutlined';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import FormatAlignLeftOutlinedIcon from '@mui/icons-material/FormatAlignLeftOutlined';
import FormatLineSpacingOutlinedIcon from '@mui/icons-material/FormatLineSpacingOutlined';
import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import FormatListNumberedOutlinedIcon from '@mui/icons-material/FormatListNumberedOutlined';
import FormatIndentDecreaseOutlinedIcon from '@mui/icons-material/FormatIndentDecreaseOutlined';
import FormatIndentIncreaseOutlinedIcon from '@mui/icons-material/FormatIndentIncreaseOutlined';
import FormatClearOutlinedIcon from '@mui/icons-material/FormatClearOutlined';
import DropDown from '../components/formatBar/dropDown/DropDown';


const style={fontSize:"medium"}
const zoomData={def:"100%", dataArr: ["Fit", "50%","75%", "90%", "100%", "125%", "150%", "200%" ]}

const stylesData={def: "Normal text", dataArr: ["Normal Text", "Title", "Subtitle", "Heading 1", "Heading 2", "Heading 3", "Heading 4"]}
const fontData={def:"Arial", dataArr: ["Arial", "TimesNewRoman", "Calibri", "Palanquin Dark"]}
const fontSizeData={def:"11", dataArr:["11","8", "9"]}

const formatBar = [
  {
    icons: <UndoIcon sx={style} />,
    description: "Undo (Ctrl+Z)",
  },
  {
    icons: <RedoIcon sx={style} />,
    description: "Redo (Ctrl+Y)",
  },
  {
    icons: <PrintOutlinedIcon sx={style} />,
    description: "Print",
  },
  {
    icons: <SpellcheckOutlinedIcon sx={style} />,
    description: "Spell and Grammar check",
  },
  {
    icons: <ImagesearchRollerOutlinedIcon sx={style} />,
    description: "Paint format",
  },
  {
    icons: <DropDown optionData={zoomData} name={"ZoomData"} />,
    description: "Zoom",
  },
  {
    icons: <DropDown optionData={stylesData} name={"StyleData"} />,
    description: "Styles",
    tag: "Styles",
  },
  {
    icons: <DropDown optionData={fontData} name={"fontData"} />,
    description: "Font",
  },
  {
    icons: <RemoveOutlinedIcon sx={style} />,
    description: "Decrease font size (Ctrl+Z)",
  },
  {
    icons: <DropDown optionData={fontSizeData} name={"fontSizeData"} />,
    description: "Styles",
  },
  {
    icons: <AddOutlinedIcon sx={style} />,
    description: "Increase font size (Ctrl+Z)",
  },
  {
    icons: <FormatBoldOutlinedIcon sx={style} />,
    description: "Bold (Ctrl+Z)",
    tag: "strong",
  },
  {
    icons: <FormatItalicOutlinedIcon sx={style}/>,
    description: "Italic (Ctrl+Z)",
    tag: "i",
  },
  {
    icons: <FormatUnderlinedOutlinedIcon sx={style} />,
    description: "Underline (Ctrl+Z)",
    tag: "u",
  },
  {
    icons: <FormatColorTextOutlinedIcon sx={style} />,
    description: "Text color",
    tag: "textcolor",
  },
  {
    icons: <ModeOutlinedIcon sx={style} />,
    description: "Highlight color (Ctrl+Z)",
    tag: "Highlight-color",
  },
  {
    icons: <InsertLinkOutlinedIcon sx={style} />,
    description: "Insert link (Ctrl+K)",
  },
  {
    icons: <AddCommentOutlinedIcon sx={style} />,
    description: "Add comment (Ctrl+Z)",
  },
  {
    icons: <InsertPhotoOutlinedIcon sx={style} />,
    description: "Insert image(Ctrl+Z)",
  },
  {
    icons: <FormatAlignLeftOutlinedIcon sx={style} />,
    description: "Align & indent (Ctrl+Z)",
    tag:"left-align"
  },
  {
    icons: <FormatLineSpacingOutlinedIcon sx={style} />,
    description: "Line & paragraph spacing (Ctrl+Z)",
  },
  {
    icons: <ChecklistOutlinedIcon sx={style} />,
    description: "Checklist",
  },
  {
    icons: <FormatListBulletedOutlinedIcon sx={style} />,
    description: "Bulleted list (Ctrl+Z)",
  },
  {
    icons: <FormatListNumberedOutlinedIcon sx={style} />,
    description: "Numbered list (Ctrl+Z)",
  },
  {
    icons: <FormatIndentDecreaseOutlinedIcon sx={style} />,
    description: "Decrease indent (Ctrl+Z)",
  },
  {
    icons: <FormatIndentIncreaseOutlinedIcon sx={style} />,
    description: "Increase indent",
  },
  {
    icons: <FormatClearOutlinedIcon sx={style} />,
    description: "Clear formatting",
  },
];

export {formatBar}