import React, { useState, useEffect } from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom'

import axiosWithAuth from '../utils/axiosWithAuth'

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = (props) => {
  const [colorList, setColorList] = useState([]);
  
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    axiosWithAuth()
    .get('http://localhost:5000/api/colors')
    .then( res => {
      setColorList(res.data)
    })
    .catch( err => console.log(err))
  }

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} props={props} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
