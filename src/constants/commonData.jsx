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
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

import DropDown from '../components/formatBar/dropDown/DropDown';


const style={fontSize:"medium"}
const zoomData={def:"100%", dataArr: ["Fit", "50%","75%", "90%", "100%", "125%", "150%", "200%" ]}
// const zoomData=["Fit", 50, 75, 90, 100, 125, 150, 200 ]

const stylesData={def: "Normal text", dataArr: ["Normal Text", "Title", "Subtitle", "Heading 1", "Heading 2", "Heading 3", "Heading 4"]}
const fontData={def:"Arial", dataArr: ["Arial", "TimesNewRoman", "Calibri", "Palanquin Dark"]}
const fontSizeData={def:"11", dataArr:["8", "9"]}

const formatBar=[
    {
        icons: <UndoIcon sx={style}/>,
        description: "Undo (Ctrl+Z)", 
        tag: "strong"
    },
    {
        icons: <RedoIcon sx={style}/>,
        description: "Redo (Ctrl+Y)", 
        tag: "strong"
    },
    {
        icons: <PrintOutlinedIcon sx={style} />,
        description: "Print", 
        tag: "strong"
    },
    {
        icons: <SpellcheckOutlinedIcon sx={style} />,
        description: "Spell and Grammar check", 
        tag: "strong"
    },
    {
        icons: <ImagesearchRollerOutlinedIcon sx={style} />,
        description: "Paint format", 
        tag: "strong"
    },
    {
        icons: <DropDown optionData={zoomData} />,
        description: "Zoom", 
        tag: "strong"
    },
    {
        icons: <DropDown optionData={stylesData} />,
        description: "Styles", 
        tag: "strong"
    },
    {
        icons: <DropDown optionData={fontData} />,
        description: "Font", 
        tag: "strong"
    },
    {
        icons: <RemoveOutlinedIcon sx={style} />,
        description: "Decrease font size (Ctrl+Z)", 
        tag: "strong"
    },
    {
        icons: <DropDown optionData={fontSizeData} />,
        description: "Styles", 
        tag: "strong"
    },
    {
        icons: <AddOutlinedIcon sx={style} />,
        description: "Increase font size (Ctrl+Z)", 
        tag: "strong"
    },
    {
        icons: <FormatBoldOutlinedIcon sx={style} />,
        description: "Bold (Ctrl+Z)", 
        tag: "bold"
    },
    {
        icons: <FormatItalicOutlinedIcon sx={style} />,
        description: "Italic (Ctrl+Z)", 
        tag: "italic"
    },
    {
        icons: <FormatUnderlinedOutlinedIcon sx={style} />,
        description: "Underline (Ctrl+Z)", 
        tag: "u"
    },
    {
        icons: <FormatColorTextOutlinedIcon sx={style} />,
        description: "Text color", 
        tag: "strong"
    },
    {
        icons: <ModeOutlinedIcon sx={style} />,
        description: "Highlight color (Ctrl+Z)", 
        tag: "strong"
    },
    {
        icons: <InsertLinkOutlinedIcon sx={style} />,
        description: "Insert link (Ctrl+K)", 
        tag: "strong"
    },
    {
        icons: <AddCommentOutlinedIcon sx={style} />,
        description: "Add comment (Ctrl+Z)", 
        tag: "strong"
    },
    {
        icons: <InsertPhotoOutlinedIcon sx={style} />,
        description: "Insert image(Ctrl+Z)", 
        tag: "strong"
    },
    {
        icons: <FormatAlignLeftOutlinedIcon sx={style} />,
        description: "Align & indent (Ctrl+Z)", 
        tag: "strong"
    },
    {
        icons: <FormatLineSpacingOutlinedIcon sx={style} />,
        description: "Line & paragraph spacing (Ctrl+Z)", 
        tag: "strong"
    },
    {
        icons: <ChecklistOutlinedIcon sx={style} />,
        description: "Checklist", 
        tag: "strong"
    },
    {
        icons: <FormatListBulletedOutlinedIcon sx={style} />,
        description: "Bulleted list (Ctrl+Z)", 
        tag: "strong"
    },
    {
        icons: <FormatListNumberedOutlinedIcon sx={style}/>,
        description: "Numbered list (Ctrl+Z)", 
        tag: "strong"
    },
    {
        icons: <FormatIndentDecreaseOutlinedIcon sx={style}/>,
        description: "Decrease indent (Ctrl+Z)", 
        tag: "strong"
    },
    {
        icons: <FormatIndentIncreaseOutlinedIcon sx={style} />,
        description: "Increase indent", 
        tag: "strong"
    },
    {
        icons: <FormatClearOutlinedIcon sx={style} />,
        description: "Clear formatting", 
        tag: "strong"
    },
]

export {formatBar}