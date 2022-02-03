import {Link, MainWrapper} from "./Header.styles"

const Header = () => {

    return (
            <MainWrapper>
                <Link href='/profile'>
                    <img src='./amoeba.png' />
                        <h1>Amöba</h1>
                    <img src='./amoeba.png' />
                </Link>
            </MainWrapper>
    )
}

export default Header