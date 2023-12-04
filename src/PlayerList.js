import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardTitle } from 'react-bootstrap';
import data from './players'; 


function player() {
  return (
    <div style={{display: "grid", gridTemplateColumns: "auto auto auto auto auto auto" }}>
      {data.map((item, index) => (
        <Card style={{ width: "15rem", margin: "10px", textAlign: "center", lineHeight: "10px" }}>
        <Card.Body>
        {<Card.Title style={{ fontWeight: "bold", background: 'repeating-linear-gradient(to right, red, red 40%, blue 60%, blue)', color:"white"}}>{item.title}</Card.Title>}
            <Card.Img src={ item.image} alt={item.name} style={{ height: "200px", borderRadius: "100px"}} />
          {<Card.Title style={{ marginTop: "20px", fontWeight: "bold" }}>{item.name}</Card.Title>}
            <Card.Text>{item.team}</Card.Text>
            <Card.Text>{item.jerseyNumber}</Card.Text>
            <Card.Text>{item.age}</Card.Text>
            {<Button variant="primary">More Details</Button>}
            
          {/* use index when you want to send each data to their seperate variables*/} 

            {/* <Card.Title>{index === 1 && item.name}</Card.Title>
            <Card.Text>{index === 1 && item.team}</Card.Text>
            <Card.Text>{index === 1 && item.jerseyNumber}</Card.Text>
            <Card.Text>{index === 1 && item.age}</Card.Text>
            {index === 1 && <Button variant="primary">More Details</Button>} */}

          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default player