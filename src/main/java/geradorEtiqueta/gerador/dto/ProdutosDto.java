package geradorEtiqueta.gerador.dto;

import java.math.BigDecimal;

public record ProdutosDto(
        Integer codigoProduto,
        String descricaoProduto,
        BigDecimal precoProduto,
        String unidadeProduto) {
}
