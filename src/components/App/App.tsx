import Header from "../Header/Header"
import { ContentWrapper, HeaderWrapper, RegWrapper } from "./App.styles"

const App = () => {


    return (
        <ContentWrapper>
            <HeaderWrapper>
                <Header />
            </HeaderWrapper>
            <RegWrapper>
                <button 
                    className="btn btn-dark">
                    Пройти регистрацию
                </button>
            </RegWrapper>
        </ContentWrapper>
    )
}

export default App