import TrashIcon from "../../assets/trash.svg"
import { useCart } from "../../hooks/CartContext"
import { Table } from "../index"
import { formatPrice } from '../../utils/formatPrice'
import {
    ButtonGroup,
    EmptyCart,
    ProductImage,
    ProductTotalPrice,   // TotalPrice is deprecated. 
    TrashImage,
} from "./styles"



export function CartItems() {
    const { cartProducts, decreaseProduct, increaseProduct, deleteProduct } = useCart()
    return (
        <Table.Root>
            <Table.Header>
                <Table.Tr>
                    <Table.Th></Table.Th>
                    <Table.Th>Itens</Table.Th>
                    <Table.Th>Preço</Table.Th>
                    <Table.Th>Quantidade</Table.Th>
                    <Table.Th>Total</Table.Th>
                    <Table.Th></Table.Th>
                </Table.Tr>
            </Table.Header>
            <Table.Body>
                {cartProducts?.length ? (cartProducts.map((product) => (
                    <Table.Tr key={product.id}>
                        <Table.Td>
                            <ProductImage src={product.url} alt="imagem produto" />
                        </Table.Td>

                        <Table.Td>
                            {product.name}
                        </Table.Td>

                        <Table.Td>  {/*se der null colocar currency.value*/}
                            {product.currencyValue}
                        </Table.Td>

                        <Table.Td>

                            <ButtonGroup>
                                <button onClick={() => decreaseProduct(product.id)}>-</button>
                                {product.quantity}

                                <button onClick={() => increaseProduct(product.id)}>+</button>

                            </ButtonGroup>

                        </Table.Td>

                        <Table.Td>
                            <ProductTotalPrice>
                                {formatPrice(product.quantity * product.price)}
                            </ProductTotalPrice>
                        </Table.Td>

                        <Table.Td>
                            <TrashImage src={TrashIcon} alt="icone lixeira" onClick={() => deleteProduct(product.id)}
                            />
                        </Table.Td>
                    </Table.Tr>
                ))
                ) : (
                    <EmptyCart>

                        <Table.Td>
                            Carrinho Vazio
                            <span style={{ fontSize: '10px' }}>
                                <br />Volte para o cardápio <br /> Aguarde a confirmação do pedido<br />Se acabou de fazer! Obrigado!.
                            </span>
                        </Table.Td>
                    </EmptyCart>
                )}
            </Table.Body>
        </Table.Root>
    )
}