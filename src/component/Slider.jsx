import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Button } from '@mui/material';
import Modal from './Modal';
import './Slider.css'

const MAX = 10000;
const MIN = 1000;
const marks = [
  {
    value: MIN,
    label: '',
  },
  {
    value: MAX,
    label: '',
  },
];

export default function CustomMarks() {
  const [val, setVal] = React.useState(MIN);
  const [open,setOpen] = React.useState(true)
  const handleChange = (_, newValue) => {
    setVal(newValue);
  };

  return (
    <div className='main_bx'>
      <div className="slid">
      <Slider
      size='large'
        marks={marks}
        step={1000}
        value={val}
        valueLabelDisplay="auto"
        min={MIN}
        max={MAX}
        onChange={handleChange}
        className='slider_l'
      />
      </div>
      <div className='slider_d1'>
            <div  className='slider_d2'>
              <span className='money' onClick={() => setVal(MIN)}>Rs {val}</span> 
              <span onClick={() => setVal(MAX)}>Actual cost</span>
            </div>
            <div className='slider_d2'>
              {/* <span  className='money' onClick={() => setVal(MIN)}>Rs {MIN - 0.2 * MIN}</span> */}
              <span className='money' onClick={() => setVal(MIN)}>Rs {val * 0.8}</span>

              <span onClick={() => setVal(MAX)}>You Pay</span>
            </div>
      </div>
      <div className='slider_d3'>
      <Button variant="contained" size="large" onClick={()=>{setOpen(true);
      console.log('clicled');}}>
          Lets Start
        </Button>
      </div>
      <div className='mm_modal'>{open && <Modal open={open} setOpen={setOpen}/>}</div>
    </div>
  );
}