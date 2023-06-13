import './styles.css'
import AddProductForm from "../../components/AddProductForm/AddProductForm";
import AdminNavbar from '../../components/AdminNavbar/AdminNavbar';

function AccountPage() {
    return(
        <div className="account-page-container">
            <AdminNavbar />
            <AddProductForm />
        </div>
    );
};

export default AccountPage;
