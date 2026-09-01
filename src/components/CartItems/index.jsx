import TrashIcon from "../../assets/trash.svg"
import { useCart } from "../../hooks/CartContext"
import { formatPrice } from '../../utils/formatPrice'
import { Table } from "../index"
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
                            <TrashImage src={TrashIcon} alt="deletar pedido" onClick={() => deleteProduct(product.id)}
                            />
                        </Table.Td>
                    </Table.Tr>
                ))
                ) : (
                    <EmptyCart>
                        {/*  O erro de hidration é sobre o colocar p em tabelas. vai precisar mexer um pouco na estrutura e nao quebra o codigo, mas em questão de SEO depois vai precisar mexer.  

A hierarquia obrigatória de uma tabela é:

<table> (a tabela em si)
<tbody> (o corpo da tabela)
<tr> (table row - a linha da tabela)
<td> ou <th> (table data - as células daquela linha)

Vá até o arquivo do componente CartItems (provavelmente src/components/CartItems/index.jsx).
Encontre a parte do código onde você constrói a <table> do carrinho.
Procure onde você está usando uma tag <p> ou um styled component feito de um parágrafo (ex: styled.p) no meio da tabela.
Troque esse <p> pela tag correta de linha de tabela, que é a <tr> (ou styled.tr no caso do styled-components). A estrutura tem que ficar: <tbody> -> <tr> -> <td>.
*/}
                        <Table.Td>
                            Carrinho Vazio
                            <span style={{ fontSize: '0.625rem' }}>
                                <br />Volte para o cardápio <br /> Aguarde a confirmação do pedido<br />Se acabou de fazer! Obrigado!.
                            </span>
                            {/** quero adicionar um botao para voltar para o inicio */}
                        </Table.Td>
                    </EmptyCart>
                )}
            </Table.Body>
        </Table.Root>
    )
}