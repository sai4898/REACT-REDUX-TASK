import React, { useEffect, useState } from 'react'
import { Button, Container, Table,  } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ADD, DLT, REMOVE } from '../redux/actions/action'
import {BsFillTrashFill} from 'react-icons/bs'

const Cart = () => {
  const [price,setPrice] = useState(0)
    const getData = useSelector((state) => state.cartreducer.carts)
    // console.log(getData)

    const history = useNavigate()

    const dispatch = useDispatch()
    // useEffect(() => {
      const addd = (e) => {
        dispatch(ADD(e))
      }
    // })

    const remove = (item) => {
      dispatch(REMOVE(item))
    }

    const dlt = (id) => {
      dispatch(DLT(id))
      history('/')
    }

    const total = ()=>{
      let price = 0;
      getData.map((ele,k)=>{
          price = ele.price * ele.qnty + price
      });
      setPrice(price);
  }

  useEffect(() => {
    total()
  },[total])

  return (
    <>
      <Container>

      {
        getData.length ? (
          <Table>
          <thead>
            <tr >
              <th>Photo</th>
              <th>Restaurant Name</th>
              <th>Delete Item</th>

            </tr>
          </thead>
          <tbody>
                                    {
                                        getData.map((product)=>{
                                            return (
                                                <>
                                                    <tr>
                                                        <td>
                                                        <NavLink to={`/cards/${product.id}`}  style={{textDecoration:'none'}} >
                                                        <img src={product.imgdata} style={{width:"7rem",height:"5rem"}} alt="" />
                                                        <h5 className='mt-2'>Item Details</h5>
                                                        </NavLink>   
                                                        </td>
                                                        <td>
                                                            <p>{product.rname}</p>
                                                            <p>Price : ₹{product.price* product.qnty}</p>
                                                            
                                                    <div style={{ display:'flex'}}>
                                                      <Button variant="secondary" onClick={() => addd(product)} style={{border:'none'}} >+</Button>
                                                            <p style={{fontSize:'22px',width:'30px',textAlign:'center',alignItems:'center',padding:'auto'}}>{product.qnty}</p>

                                                      <Button variant="secondary" onClick={product.qnty <=1 ? ()=>dlt(product.id) : ()=>remove(product)}>-</Button>
                                                    </div>
                                                        </td>

                                                       <BsFillTrashFill size={40} style={{color:'red',marginTop:'20px'}}  onClick={() => dlt(product.id)}/>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                    <p className='text-center'>Total :₹ {price}</p>
                                </tbody>
        <div style={{marginTop:'15px', float:'right',backgroundColor:'black',padding:'4px',borderRadius:'10px'}}>
        <Link  to='/placeorder'><button type="button" class="btn btn-dark">Place Order</button></Link>
        </div>
        </Table>
        
        ) : (
          'emty'
        )
      }
          </Container>
    </>
  )
}

export default Cart