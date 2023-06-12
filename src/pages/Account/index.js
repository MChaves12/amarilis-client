import './styles.css'
import Sidebar from "../../components/Sidebar/Sidebar";
import AddProductForm from "../../components/AddProductForm/AddProductForm";

function AccountPage() {
    return(
        <div className="account-page-container">
            <Sidebar />
            <AddProductForm />
        </div>
    );
};

export default AccountPage;
