import './produkt.css'
import {Button, Card} from 'react-bootstrap';
import {useEffect, useState} from "react";
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';

function Produkt() {

    const [productList, setProductList] = useState([]);
    const history = useHistory();
    const readData = () => {
        axios.get(`${process.env.REACT_APP_BACKENDURL}/product`).then(res => {
            setProductList(res.data);
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        readData();
    }, [])

    const handleEditProduct = (productId) => {
        history.push(`/editProdukt/${productId}`)
    }

    const handleDeleteProduct = (productId) => {
        axios.delete(`${process.env.REACT_APP_BACKENDURL}/product/${productId}`).then(res => {

            alert("Are you sure?")
            readData();
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <>
            <div className="container-test">

                {productList.map(item => <div className="items">
                    <Card>
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
                            <Button onClick={() => handleEditProduct(item._id)} variant="primary">edit</Button>
                        </Card.Body>
                    </Card>
                </div>)}

            </div>
            <div className='buContainer'>
                <Link to='./newprodukt'>
                    <button>New Product</button>
                </Link>
            </div>

        </>
    );
}

export default Produkt;
