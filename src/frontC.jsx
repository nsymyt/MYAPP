import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import {getData} from './data';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Pagination } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Selection = () =>{
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const [correctness,setCorrectness] = useState("");
  const answer = getData.map((data) => (<li key={data.contents_detail_id}>{data.answer}</li>))

  const checkAnswer = (selected) => {
    if (selected === answer){
      setCorrectness("正解です");
    } else{
      setCorrectness("不正解です");
    }
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  return(
    <div>
      {/* <p>{correctness}{answer}</p> */}
    <Button variant="contained" onClickCapture={() => checkAnswer(1)}>選択肢1</Button>
    <Button variant="contained" onClickCapture={() => checkAnswer(2)}>選択肢2</Button>
    <Button variant="contained" onClickCapture={() => checkAnswer(3)}>選択肢3</Button>
    <Button variant="contained" onClickCapture={() => checkAnswer(4)}>選択肢4</Button>
    <Typography>Page: {page}</Typography>
      <Pagination count={10} page={page} onChange={handleChange} />
    </div>
  );
}

export default Selection