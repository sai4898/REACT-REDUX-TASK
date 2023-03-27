import React, { useState } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import Badge from 'react-bootstrap/Badge';
import { BsFillCartDashFill } from "react-icons/bs";

import { useSelector } from 'react-redux';

import { NavLink ,Link} from 'react-router-dom';

const Header = () => {

    const getData = useSelector((state) => state.cartreducer.carts)
    console.log(getData)
    
    
  return (
    <>
     <Navbar bg="dark" variant="dark" style={{ height:'60px' }}>
        <Container>
          <NavLink to='/' className='text-decoration-none text-light mx-3 font-size-22'>Home</NavLink>
         
{
    getData.length > 0 ? <Link to='/cart'>
          <Badge className=' text-light'>

        <BsFillCartDashFill size={20} style={{color:'white',cursor:'pointer'}}/>
        {getData.length > 0  ? getData.length : '1'}
</Badge>
</Link> : <BsFillCartDashFill size={20}  title=' Cart Is Emty' style={{color:'white',cursor:'pointer'}}/>
}
     

        </Container>
      </Navbar>
    </>
  )
}

export default Header