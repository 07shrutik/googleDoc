
import {useState} from 'react';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import { useRecoilState } from "recoil";
import { fontSize, fontfamily, zoomData,styleData } from "../../../atom/atom";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(0),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: "transparent",
    border: '1px solid #ced4da',
    // height:20,
    fontSize: 11,
    padding: '0px 5px 7px 5px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

export default function DropDown({optionData,name}) {
const [, setfontSize] = useRecoilState(fontSize);
const [, setfontFamily] = useRecoilState(fontfamily);
const [, setZoomData] = useRecoilState(zoomData);
const [, setStyleData] = useRecoilState(styleData);

  
  const [data, setData] = useState('');
  const {def, dataArr}=optionData;
 
  function handleChange(e){
   if(name=="fontSizeData"){
    setfontSize(e.target.value)
   }
   else if(name=="fontData"){
    setfontFamily(e.target.value);
   }else if(name=="ZoomData"){
    setZoomData(e.target.value);
    console.log(e.target.value);
   }else if(name=="StyleData"){
    setStyleData(e.target.value);
   }
   
  }
  
  return (
    <div>
      
      
      <FormControl sx={{ m: 1 }} variant="standard">
        <NativeSelect
          id="demo-customized-select-native"
          value={data}
         
          onChange={handleChange}
          input={<BootstrapInput />}
        //   displayEmpty
        >
          <option sx={{fontSize: "1px", color:"blue"}} value="">
            {def}
          </option>
             {dataArr.map(item=>(<option value={item}>{item}</option>))}
        </NativeSelect>
      </FormControl>
    </div>
  );
}