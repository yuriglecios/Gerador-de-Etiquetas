package geradorEtiqueta.gerador.controller;

import geradorEtiqueta.gerador.model.Produtos;
import geradorEtiqueta.gerador.service.ProdutosService;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController()
@RequestMapping("/produtos")
public class ProdutosController {

    private ProdutosService produtosService;

    public ProdutosController(ProdutosService produtosService) {
        this.produtosService = produtosService;
    }

    @GetMapping
    public ResponseEntity<List<Produtos>> getListaProdutos(){
       return produtosService.listarTodosProdutos();
    }

}
