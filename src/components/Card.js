import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ADD } from '../redux/actions/action';
import cardsData from './CardsData'
import './style.css'

const Cards = () => {
    const [data,setdata] = useState(cardsData)
    // console.log(data);

    const dispatch = useDispatch()
    const send = (e) => {
        dispatch(ADD(e))
    }
  return (
    <>
    <Container>
        <h2 className='mt-3 text-center' >Add To Cart Products</h2>


<div className='row d-flex justify-content-center align-items-center'>
    {data.map((item) => (

        <Card style={{ width: '18rem',padding:20,border:'none',display:'inline' }} className='mx-2 mt-4 card_style'>
      <Card.Img variant="top" src={item.imgdata} style={{ height:'16rem'}}/>
      <Card.Body>
        <Card.Title>{item.rname}</Card.Title>
        <Card.Text>
         Price: {item.price} $
        </Card.Text>
        <div className='button_div d-flex justify-content-center'>

        <Button variant="primary" onClick={() => send
        (item)} >Add to Cart</Button>
        </div>
      </Card.Body>
    </Card>
    ))}
    
   
  </div>
    </Container>
    </>
  )
}

export default Cards