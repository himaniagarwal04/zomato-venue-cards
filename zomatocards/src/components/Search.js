import React, { useEffect, useState } from 'react'
import Fooddata from './FoodData'
import "./style.css"
import Form from 'react-bootstrap/Form'
import Cards from './Cards'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Set from './Set'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
const Search = () => {

    const [fdata, setFdata] = useState(Fooddata);
    const [copydata, setCopyData] = useState([]);

    const chanegData = (e) => {
        let getchangedata = e.toLowerCase();

        if (getchangedata === "") {
            setCopyData(fdata);
        } else {
            let storedata = copydata.filter((ele, k) => {
                return ele.rname.toLowerCase().match(getchangedata);
            });

            setCopyData(storedata)
        }
    }


    useEffect(() => {

        setTimeout(() => {
            setCopyData(Fooddata);
        }, 3000);

    }, [])

    return (
        <>
      <Navbar bg="light" fixed="top" className='search'>
        <Container>
          <Navbar.Brand href="#home">
            
            <img
            
              alt=""

              src="https://drive.google.com/uc?export=view&id=1Hj1rjs9d8mSbQp3LTRMkKh3Xwvck0QA2"
              width="130"
              height="50"

              

              
              className="d-inline-block align-top"

            />{' '}

          </Navbar.Brand>
        </Container>
      </Navbar>
    
      <MDBRow> 
            <div className="container d-flex justify-content-between align-items-center">
               
                <h2 style={{ color: "#1b1464", cursor: "pointer" }} className="mt-3">Search Filter App</h2>
            </div>
            </MDBRow> 

            <MDBRow> 
            <Form className='d-flex justify-content-center align-items-center mt-3'>
                <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">

                    <Form.Control type="text"
                        onChange={(e) => chanegData(e.target.value)}
                        placeholder="Search Venue" />
                </Form.Group>
                <button className='btn text-light col-lg-1' style={{ background: "#24014E" }}>Submit</button>
            </Form>
            </MDBRow> 
            
           
            <MDBRow> 
                <MDBCol md ='2' className="side_nav d-flex align-items-center">
                <Card style={{ width: '10rem',height: '10rem',border:"none" }} className=" d-flex justify-content-space-evenly align-content-center">
                    <Card.Body className='d-flexflex-direction-column align-items-center'>
                    <Card.Text >
                        <Button as="input" type="button" value="Dashboard" variant='side_button' />
                        </Card.Text>
                        <Card.Text>
                        <Button as="input" type="button" value="Book Venue" variant='side_button' />
                        </Card.Text>
                    </Card.Body>
                </Card>
                </MDBCol>
                <MDBCol md='10'>
            <section className='iteam_section mt-4 container'>
                
                
                <div className="row mt-2 d-flex justify-content-around align-items-center">
                    {copydata && copydata.length ? <Cards data={copydata} /> : <Set  sdata={fdata}/>}
                </div>
            </section>
            </MDBCol>
            </MDBRow> 
        </>
    )
}

export default Search