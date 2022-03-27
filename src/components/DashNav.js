import { Navbar, Nav, Container, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

const DashNav=({setIndex})=>{

    return (
        <>
        <Container expand='sm'>
        <Navbar bg="dark" variant="dark">
    <Container className="justify-content-center">
    
    <Nav className="justify-content-center" >
      <Col><Nav.Link onClick={()=>setIndex(0)}>Overview</Nav.Link></Col>
      <Col><Nav.Link onClick={()=>setIndex(1)}>GitHub</Nav.Link></Col>
      <Col><Nav.Link onClick={()=>setIndex(2)}>CodeForces</Nav.Link></Col>
      <Col><Nav.Link onClick={()=>setIndex(3)}>LeetCode</Nav.Link></Col>
    </Nav>
    </Container>
  </Navbar>
  </Container>
        </>
    )
}
export default DashNav;