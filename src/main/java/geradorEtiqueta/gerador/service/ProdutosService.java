package geradorEtiqueta.gerador.service;

import geradorEtiqueta.gerador.dao.ProdutosDao;
import geradorEtiqueta.gerador.model.Produtos;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProdutosService {

    private ProdutosDao produtosDao;

    public ProdutosService(ProdutosDao produtosDao) {
        this.produtosDao = produtosDao;
    }


    public ResponseEntity<List<Produtos>> listarTodosProdutos() {
        var listaProdutos = produtosDao.findAll();
        System.out.println(listaProdutos.size());
        return ResponseEntity.ok(listaProdutos);
    }

}
