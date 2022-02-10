import React from 'react'
import  music from '../img/musical-note.png'
import cart from'../img/shopping-cart.png'
import {useState} from 'react'
import '../styles/app.css'



function NavBar() {

    const [state, setstate] = useState('')

  function handleSubmit(){
     
    }
    axios.get('https://rss.applemarketingtools.com/api/v2/us/music/most-played/10/albums.json').then((res)=>{setstate(res.data.feed.result)}); 

  return (


  <div className = 'navbar-container'>
        <h1 className = 'navbar-title'>
        <img  className = 'music-png'src={music} alt="" />
            iTunes
        </h1>

    <div className='sconde-part' >
    <div  className = 'input-container'>

   <input type="text" placeholder="search" onChange={(e)=>setstate(e.target.value)}/>
   <button className = 'btn-delete' onClick={handleSubmit}>X</button>

   <img className = 'cart-png'src={cart} alt="" />
   
   </div>
   <div className= 'boutons'>
  
   <button className = 'btn-search'>Recherche</button>
   </div>

   
    </div>

  </div>
  )
}

export default NavBar