import './produkt.css'
import {Button, Card} from 'react-bootstrap';
import {useEffect, useState} from "react";
import axios from 'axios';

function Produkt() {

    const [productList, setProductList] = useState([]);

    const readData = ()=>{
        axios.get("http://localhost:5000/product").then(res => {
            setProductList(res.data);
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        readData();
    }, [])

    const handleDeleteProduct = (productId) => {
        axios.delete(`http://localhost:5000/product/${productId}`).then(res => {
            alert("ok")
            readData();
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div className="container-test">
            {productList.map(item => <div className="items">
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={item.image} className='imgBorder'/>
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                            {item.price}
                        </Card.Text>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                        <Button onClick={() => handleDeleteProduct(item._id)} variant="primary">delete</Button>
                    </Card.Body>
                </Card>
            </div>)}
            
        </div>

    );
}

export default Produkt;