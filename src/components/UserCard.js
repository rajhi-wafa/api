import React from "react";
import {Col,Card,CardText,CardTitle} from "reactstrap";

const UserCard=({user})=>{
    return(
  
        <Col md="4" lg="4" sm="6" xs="12">
<Card body style={{ margin:"12px"}}  >
    
    <CardText className="avatar">{user.name[0]}</CardText>
    <CardTitle>{user.name}</CardTitle>
    <CardText>{user.email}</CardText>
    
</Card>

        </Col>
      
    )
}
export default UserCard;
