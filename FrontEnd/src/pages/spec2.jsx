import React from 'react'
import axios from 'axios'
import {useState} from 'react'
import NavBar from '../components/NavBar'
import '../styles/app.css'


function spec2() {  
    const [state, setstate] = useState()

  useEffect(() => {

        axios.get('https://rss.applemarketingtools.com/api/v2/us/music/most-played/10/albums.json').then((res)=>{setstate(res.data.feed.result)});  
    console.log(response);

})
  return (
    <div>

    <NavBar/>

    </div>
  )
 
}

export default spec2;