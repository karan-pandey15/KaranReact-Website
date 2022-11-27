const Cardcopy =(props)=>{
    return(
        <>
 <div className="card" style={{width: '18rem'}}>
  <img 
        variant="top"
        src={props.imgsrc}
   className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.text}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>  
    </>
)    
}


export default Cardcopy;


// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button';

// import React from 'react';



{/* 
function Cardcopy(props) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={props.imgsrc}

        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.text}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Cardcopy; */}

