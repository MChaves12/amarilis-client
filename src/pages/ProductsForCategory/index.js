import './styles.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/amarilis.api';
import Navbar from '../../components/Navbar/Navbar';
import CardProduct from '../../components/CardProduct';

function ProductsForCategory () {
    const [category, setCategory] = useState({});
    const {categoryName} = useParams()
    
    useEffect(() => {
        api.getCategoryByName(categoryName)
        .then((res) => {
            setCategory(res);
        });
    }, [categoryName]);

    const productsFromCategory = category.products;

    return (
        <div>
            <Navbar />
            <div className='cards-container'>
                <div className='products-container'>
                    {productsFromCategory.map(product => {
                        return(
                            <CardProduct className='product-card' productName={product.name} productPrice={product.price} productId={product._id} productImg={product.images} productRoute={'products'}/>
                        )           
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProductsForCategory;