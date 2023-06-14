import './styles.css';
import { useState, useEffect, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
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

    const fechProduct = useCallback(async () => {
        const productFromDB = await api.getProduct(productId);
        setProduct(productFromDB);
        setName(productFromDB.name);
        setPrice(productFromDB.price);
        setDescription(productFromDB.description);
        setSize(productFromDB.size);
    }, [productId]);

    const deleteProduct = async () => {
        await api.removeProduct(productId);
        navigate('/products');
    };

    const toggleIsFormOpen = () => {
        setIsFormOpen(!isFormOpen);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await api.editProduct({name, price, description, size});
        setIsFormOpen(false);
        fechProduct();
    };

    useEffect(() =>{
        fechProduct()
    }, [fechProduct]);

    return(
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
            
                        <button type="submit">Adicionar produto</button>       
                </form>
                ) :(
                    <>
                        <h2>{product.name}</h2>
                        <span>{product.price}</span>
                        <p>Tamanho: {product.size}</p>
                        <p>{product.description}</p>
                    </>
                )}
                </>
            )}

            <button onClick={toggleIsFormOpen}>{isFormOpen ? 'Cancelar' : 'Editar'}</button>
            <Link to='/products'>
                 <button>Voltar</button>
            </Link>
            <button onClick={deleteProduct}>Remover</button>
        </div>
    );
};

export default ProductCrudPage;
