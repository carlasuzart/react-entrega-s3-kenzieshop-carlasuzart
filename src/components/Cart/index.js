import { useSelector, useDispatch } from "react-redux";
import { removeThunk } from "../../store/cart/thunk";
import { FiTrash2 } from "react-icons/fi";
import { Container } from "./style";

function CartCard() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const total = cart.reduce((acc, value) => {
    return value.price + acc;
  }, 0);

  return (
    <Container>
      <main>
        <ul>
          <div className="title">
            <p>Produto</p>
            <p>Preço</p>
          </div>
          {cart.map((item) => {
            return (
              <div className="cart" key={item.id}>
                <div>
                  <img src={item.img} alt={item.name} />
                </div>

                <p>{item.name}</p>

                <span>R$ {item.price.toFixed(2)}</span>
                <button onClick={() => dispatch(removeThunk(item))}>
                  <FiTrash2 />
                </button>
              </div>
            );
          })}
        </ul>

        <section>
          <div className="orderSum">
            <p>Resumo do Pedido</p>
          </div>
          <div>
            <div className="order">
              {cart.length <= 1 ? (
                <p>{cart.length} Produto</p>
              ) : (
                <p>{cart.length} Produtos</p>
              )}
              <span>R$ {total.toFixed(2)}</span>
            </div>
            <div>
              <button>Finalizar o pedido</button>
            </div>
          </div>
        </section>
      </main>
    </Container>
  );
}

export default CartCard;
