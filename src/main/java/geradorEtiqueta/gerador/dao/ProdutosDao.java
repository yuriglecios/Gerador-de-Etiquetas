package geradorEtiqueta.gerador.dao;

import geradorEtiqueta.gerador.model.Produtos;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutosDao extends JpaRepository<Produtos, String> {
}
