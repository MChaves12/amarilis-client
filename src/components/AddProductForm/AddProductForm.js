import './styles.css'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import api from '../../api/amarilis.api';

function AddProductForm() {

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [size, setSize] = useState('');

    const handleName = (e) => setName(e.target.value);
    const handlePrice = (e) => setPrice(e.target.valeu);
    const handleDescription = (e) => setDescription(e.target.value);
    const handleSize = (e) => setSize(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const product = {
            name, price, description, size
        }
        await api.addProduct(product);
        resetForm();
    }

    const resetForm = () => {
        setName('');
        setPrice(0);
        setDescription('');
        setSize('');
    }

    return(
        <div>
            <Form onSubmit={handleSubmit} className='add-product-form-container'>
                 <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control className='input' type="text" placeholder="Nome" onChange={handleName} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control className='input' type="number" placeholder="Preço" onChange={handlePrice} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control className='description-input' type="text" placeholder="Descrição" onChange={handleDescription} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control className='input' type="text" placeholder="Tamanho" onChange={handleSize} />
                </Form.Group>

                <button className='login-btn' type='submit'>Adicionar Produto</button>
            </Form>    
        </div>
    );
};

export default AddProductForm;
