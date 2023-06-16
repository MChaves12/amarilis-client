import './styles.css';
import { useState, useEffect, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import AdminNavbar from '../../components/AdminNavbar/AdminNavbar';
import Card from '../../components/Card/Card';
import api from '../../api/amarilis.api';

function ProductCrudPage () {

    const [product, setProduct] = useState(null);
    const [isFormOpen, setIsFormOpen ] = useState(false);

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

    const toggleIsFormOpen = () => {
        setIsFormOpen(!isFormOpen);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await api.editProduct(productId, {name, price, description, size});
        setIsFormOpen(false);
        fetchProduct();
    };

    useEffect(() =>{
        fetchProduct()
    }, [fetchProduct]);

    return(
        <div>
            <AdminNavbar />
            <div className='product-crud'>
                {product && (
                    <>
                    {isFormOpen ? (
                        <form className='add-product-form-container' onSubmit={handleSubmit}>
                            <label htmlFor="name">Nome:</label>
                            <input className='input' id="name" type="text" value={name} onChange={handleName} />
                        
                            <label htmlFor="price">Preço:</label>
                            <input className='input' id="price" type="text" value={price} onChange={handlePrice} />
                        
                            <label htmlFor="description">Descrição:</label>
                            <textarea className='input' id="description" type='text' value={description} onChange={handleDescription} />
                        
                            <label htmlFor="size">Tamanho:</label>
                            <input className='input' id="size" type="text" value={size} onChange={handleSize} />
                
                            <button className='submit-form-btn' type="submit">Adicionar</button>       
                    </form>
                    ) :(
                        <>
                            <Card productName={product.name} productPrice={product.price}/>
                        </>
                    )}
                    </>
                )}
                <div className='btns-container'>
                    <button className='form-btns' onClick={toggleIsFormOpen}>{isFormOpen ? 'Cancelar' : 'Editar'}</button>
                    <Link to='/products'>
                        <button className='form-btns'>Voltar</button>
                    </Link>
                    <button className='form-btns' onClick={deleteProduct}>Remover</button>
                </div>        
            </div>
        </div>
    );
};

export default ProductCrudPage;
