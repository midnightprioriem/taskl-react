import './App.css';
import Login from './components/Login'
import { StylesProvider } from '@material-ui/core/styles';


function App() {
    return (
        <StylesProvider injectFirst>
            <div className="App" >
                <Login> </Login>
            </div>
        </StylesProvider>
    );
}

export default App;