import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import {exerciseOptions,fetchData} from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({setExercises,bodyPart,setBodyPart }) => {
  const [search,setSearch]=useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      setBodyParts(['all', ...bodyPartData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch=async ()=>{
    if(search){
      const exerciseData=await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
      const searchedExercises = exerciseData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );
      console.log(exerciseData)
      setSearch('');
      setExercises(searchedExercises);
    }
  }
  return (
    <Stack alignItems='center' mt='30px' justifyContent='center' p='20px'>
      <Typography fontWeight='bold'sx={{fontSize:{lg:'45px',xs:'30px'}}} mb="50px" textAlign="center">
        Awesome Exercises <br />You Should Know
      </Typography>
      <Box position="relative" mb="70px">
        <TextField 
        height="76px"
        value={search} 
        sx={{input:{fontWeight:'600',border:'none',borderRadius:'4px'}, width:{ lg:'1000px',xs:'350px'},backgroundColor:'#fff',borderRadius:'40px'}}
        onChange={(e)=>setSearch(e.target.value.toLowerCase())} 
        placeholder="Search Exercises" 
        type="text">

        </TextField>
        <Button className="search-btn" sx={{ bgcolor:'#FF2625',color:'#fff',textTransform:'none',width:{lg:'175px',xs:'80px'},height:'56px',position:'absolute',right:'0px',fontSize:{lg:'20px',xs:'14px'}}} onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>
    </Stack>
  )
}

export default SearchExercises;
