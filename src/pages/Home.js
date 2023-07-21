import React, { useState } from 'react';
import { Box } from '@mui/material';

import Banner from '../components/Banner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = () => {
  const [bodyPart, setbodyPart] = useState('all');
  const [exercises,setExercises] = useState([]);
  return (
    <Box>
        <Banner />
        <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setbodyPart} />
        <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} />
    </Box>
  )
}

export default Home;