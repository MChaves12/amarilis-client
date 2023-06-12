import './styles.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.css';


function Sidebar() {
    return(
        <div className='sideMenu-container'>
            <DropdownButton size='lg' variant="secondary" id="dropdown-basic-button" title="Produtos">
                <Dropdown.Item href="#/action-1">Todos os produtos</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Criar produto</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Editar produto</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Deletar produto</Dropdown.Item>
            </DropdownButton>
            <DropdownButton size='lg' variant="secondary" id="dropdown-basic-button" title="Categorias">
                <Dropdown.Item href="#/action-1">Todas as categorias</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Criar categoria</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Editar categoria</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Deletar categoria</Dropdown.Item>
            </DropdownButton>
        </div>
    );
};

export default Sidebar;
