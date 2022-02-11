import {SLink, MainWrapper} from "./Header.styles"
import Link from 'next/link'

const Header = () => {

    return (
            <MainWrapper>
                <Link href='/feed'>
                    <SLink>
                        <img src='/amoeba.png' />
                            <h1>Amöba</h1>
                        <img src='/amoeba.png' />
                    </SLink>
                </Link>
            </MainWrapper>
    )
}

export default Header