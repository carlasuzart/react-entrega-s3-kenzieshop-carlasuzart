import { FiShoppingCart } from "react-icons/fi";
import { FiLogIn } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container } from "./style";

const Header = () => {
  const history = useHistory();
  const cart = useSelector((store) => store.cart);

  function handleClick() {
    history.push("/");
  }

  return (
    <Container>
      <header>
        <div>
          <h1 onClick={handleClick}>Kenzie Flower</h1>
        </div>
        <div className="buttons">
          <button onClick={() => history.push("/cart")}>
            <span>
              Carrinho <FiShoppingCart />
              {cart.length > 0 && <sup> {cart.length}</sup>}
            </span>
          </button>

          <button>
            <p>
              <FiLogIn /> Entrar
            </p>
          </button>
        </div>
      </header>
    </Container>
  );
};
export default Header;
