import CartWidget from "./CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav>
            <h3>
                Fety-Shop
            </h3>
            <div>
                <button>Moda</button>
                <button>Tecnologia</button>
                <button>Hogar</button>
                <button>Bebidas</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar