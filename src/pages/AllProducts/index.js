import './style.css';
import { useState, useEffect } from 'react';
import api from '../../api/amarilis.api';
import AdminNavbar from '../../components/AdminNavbar/AdminNavbar';
import Card from "../../components/Card/Card";

function AllProductsPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.getAllProducts()
        .then((res) => {
            setProducts(res);
        });
    }, []);

    return(
        <div>
            <AdminNavbar />
            <div className='cards-container'> 
                <div className='products-container'>
                    {products.map(product => {
                        return(
                            <Card className='product-card' productName={product.name} productPrice={product.price} productId={product._id} productImg={product.images} productRoute={'products'}/>
                        )           
                    })}
                </div>
            </div>
        </div>
    );
};

export default AllProductsPage;
