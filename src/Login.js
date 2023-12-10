import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { InputGroup } from 'react-bootstrap';
import { useContext} from 'react';
import { context } from './Contextpage';


function Login(){
   
   const{setname,setprice,setquan,setdescription,setsubmit}=useContext(context) 
    return(
        <div className='card'>
            <Container>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default" >ProductName:</InputGroup.Text>
                    <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default" onChange={(e)=>{
                setname(e.target.value)   
              }} />
              </InputGroup>
                 <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default" >Price:</InputGroup.Text>
                        <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default" onChange={(e)=>{
                        setprice(e.target.value)
                    }}/>
                 </InputGroup>
                     <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default" >Quantity:</InputGroup.Text>
                            <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default" onChange={(e)=>{
                            setquan(e.target.value)
                        }} />
                    </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-default" >Descripition:</InputGroup.Text>
                                <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default" onChange={(e)=>{
                                setdescription(e.target.value)
                            }} />
                    </InputGroup>
                
                     <Button variant="primary" type="submit" onClick={()=>setsubmit(true)}> Submit </Button>
                  
                 
            </Container>
                    </div>
    )
}

export default Login;