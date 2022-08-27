import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

function GetIcon(){
    return (
        <>
        <MDBBtn className="m-1" floating style={{ backgroundColor: "#3b5998" }} href="#">
          <MDBIcon fab icon="facebook-f" />
        </MDBBtn>

        <MDBBtn className="m-1" floating style={{ backgroundColor: "#55acee" }} href="#">
          <MDBIcon fab icon="twitter" />
        </MDBBtn>

        <MDBBtn className="m-1" floating style={{ backgroundColor: "#dd4b39" }} href="#">
          <MDBIcon fab icon="google" />
        </MDBBtn>

        <MDBBtn className="m-1" floating style={{ backgroundColor: "#ac2bac" }} href="#">
          <MDBIcon fab icon="instagram" />
        </MDBBtn>
        
        <MDBBtn className="m-1" floating style={{ backgroundColor: "#25d366" }} href="#">
          <MDBIcon fab icon="whatsapp" />
        </MDBBtn>
        </>
    )
}

export default GetIcon;