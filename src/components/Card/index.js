import { useDispatch, useSelector } from "react-redux";
import { cartThunk } from "../../store/cart/thunk";

import { Container } from "./style";

function Card() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  return (
    <Container>
      <div>
        <ul>
          {products.map((item) => (
            <div>
              <li key={item.id}>
                <div>
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="text">
                  <h3>{item.name}</h3>
                  <span>R${item.price.toFixed(2)} </span>
                  <button onClick={() => dispatch(cartThunk(item))}>
                    Adicionar ao carrinho
                  </button>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </Container>
  );
}

export default Card;
