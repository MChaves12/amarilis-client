import './styles.css';
import { useState, useEffect, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import AdminNavbar from '../../components/AdminNavbar/AdminNavbar';
import api from '../../api/amarilis.api';

function ProductCrudPage () {

    const [product, setProduct] = useState(null);

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [size, setSize] = useState('');

    const handleName = (e) => setName(e.target.value);
    const handlePrice = (e) => setPrice(e.target.value);
    const handleDescription = (e) => setDescription(e.target.value);
    const handleSize = (e) => setSize(e.target.value);

    const { productId } = useParams();
    const navigate = useNavigate();

    const fetchProduct = useCallback(async () => {
        const productFromDB = await api.getProduct(productId);
        console.log(productFromDB);
        setProduct(productFromDB);
        setName(productFromDB.name);
        setPrice(productFromDB.price);
        setDescription(productFromDB.description);
        setSize(productFromDB.size);
    }, [productId]);


    const deleteProduct = async () => {
        await api.removeProduct(productId);
        navigate('/admin/products');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await api.editProduct(productId, {name, price, description, size});
        fetchProduct();
        navigate('/admin/products');
    };

    useEffect(() =>{
        fetchProduct()
    }, [fetchProduct]);

    return(
        <div>
            <AdminNavbar />
            <div className='product-crud'>
                {product && (
                        <form className='add-product-form-container' onSubmit={handleSubmit}>
                            <label htmlFor="name">Nome:</label>
                            <input className='input' id="name" type="text" value={name} onChange={handleName} />
                        
                            <label htmlFor="price">Preço:</label>
                            <input className='input' id="price" type="text" value={price} onChange={handlePrice} />
                        
                            <label htmlFor="description">Descrição:</label>
                            <textarea className='input' id="description" type='text' value={description} onChange={handleDescription} />
                        
                            <label htmlFor="size">Tamanho:</label>
                            <input className='input' id="size" type="text" value={size} onChange={handleSize} />
                            <div className='edit-btns-container'>
                                <Link className='back-btn' to='/admin/products'>
                                     <button className='form-btns'>Voltar</button>
                                </Link>
                                <button className='submit-form-btn' type="submit">Confirmar</button>
                                <button className='delete-form-btn' type='button' onClick={deleteProduct}>Remover</button>  
                            </div>     
                    </form>                   
                )}                                       
                </div>        
            </div>
    );
};

export default ProductCrudPage;
