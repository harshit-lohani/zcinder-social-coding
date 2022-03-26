import { Navbar, Nav, Container, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

const DashNav=()=>{
  
    return (
        <>
        <Container expand='sm'>
        <Navbar bg="dark" variant="dark">
    <Container className="justify-content-center">
    
    <Nav className="justify-content-center" >
      <Col><Nav.Link href="/dashboard/overview">Overview</Nav.Link></Col>
      <Col><Nav.Link href="/dashboard/github">GitHub</Nav.Link></Col>
      <Col><Nav.Link href="/dashboard/codeforces">CodeForces</Nav.Link></Col>
      <Col><Nav.Link href="/dashboard/leetcode">LeetCode</Nav.Link></Col>
    </Nav>
    </Container>
  </Navbar>
  </Container>
        </>
    )
}
export default DashNav;