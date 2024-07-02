package geradorEtiqueta.gerador.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CODIGO")
    private String codigoProduto;

    @Column(name = "DESCRICAO")
    private String descricaoProduto;

    @Column(name = "VENDA")
    private BigDecimal precoProduto;
    
    @Column(name = "UNIDADE")
    private String unidadeProduto;

}
