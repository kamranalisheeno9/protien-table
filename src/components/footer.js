import React,{useState} from 'react';
import { MDBCol,MDBBtn, MDBContainer, MDBRow, MDBFooter,MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
    const Footer = () => {
        const [display,setDisplay] = useState(false)
        const Display =()=>{
        setDisplay(!display)
    }
    return (
        <div className="footer">
             <MDBFooter className="font-small footer-container  pt-2 mt-4">
             <MDBContainer className={display ? "text-center text-md-left show  " : "display"}>
             <MDBRow className="footer-buttons">
          <MDBCol  sm="4"  md="3" lg="3" xl="2">
          <MDBDropdown>
        <MDBDropdownToggle caret color="info">
          Dynamic
        </MDBDropdownToggle>
        <MDBDropdownMenu color="ins" basic>
        <MDBDropdownItem>Full View</MDBDropdownItem>
          <MDBDropdownItem>Compact View</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
          </MDBCol>
          <MDBCol  sm="4" md="3" lg="3" xl="2">
          <MDBBtn color="info">My Graph</MDBBtn>

          </MDBCol>
          <MDBCol  sm="4" md="3" lg="3" xl="2">
          <MDBDropdown>
        <MDBDropdownToggle caret color="info">
          Universal
        </MDBDropdownToggle>
        <MDBDropdownMenu color="ins" basic>
        <MDBDropdownItem>Full View</MDBDropdownItem>
          <MDBDropdownItem>Compact View</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBContainer className="text-center text-md-left ">
       
        <MDBRow className="footer-buttons">
          <MDBCol  sm="4"  md="3" lg="3" xl="2">
          <MDBBtn color="mdb-color">My Table</MDBBtn>
          </MDBCol>
          <MDBCol  sm="4" md="3" lg="3" xl="2">
          <MDBBtn onClick={()=>Display()} color="mdb-color">My Library</MDBBtn>

          </MDBCol>
          <MDBCol  sm="4" md="3" lg="3" xl="2">
          <MDBBtn color="mdb-color">My Graph</MDBBtn>
            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
        </div>
    );
};

export default Footer;