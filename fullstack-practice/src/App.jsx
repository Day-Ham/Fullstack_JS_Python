import { useState,useEffect } from 'react'
import ContactList from './ContactList'
import './App.css'
import ContactForm from './ContactForm'

function App() {
  const[contacts,setContacts]=useState([])
  const[isModalOpen,setIsModalOpen]=useState(false)
  useEffect(()=>{
    fetchContacts()
  },[])


  const fetchContacts=async()=>{
    const response =await fetch("http://127.0.0.1:5000/contacts")
    const data= await response.json()
    setContacts(data.contacts)
  }

  const closeModel =()=>{
    setIsModalOpen(false)
  }
  const openModelCreate =()=>{
    if(!isModalOpen) setIsModalOpen(true)
    
  }

  return<>
  <ContactList contacts={contacts}></ContactList>
  <button onClick={openModelCreate}>Create New Contact</button>
  {
    isModalOpen &&<div className='modal'>
      <div className='model-content'>
        <span className='close' onClick={closeModel}>&times;</span> 
        <ContactForm></ContactForm>
      </div>
    </div>
  }
 
  </>
}

export default App
