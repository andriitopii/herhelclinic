import { Helmet } from "react-helmet";

const AdminPage = () => {
    return ( <main>
        <Helmet>
        <title>HERHEL CLINIC | Панель керування</title>
        </Helmet>
        <form>
            <input type="text"/>
            <input type="password"></input>
            <input type="submit"></input>
        </form>
        </main>
     );
}
 
export default AdminPage;