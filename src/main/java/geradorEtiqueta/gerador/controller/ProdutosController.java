package geradorEtiqueta.gerador.controller;

import geradorEtiqueta.gerador.model.Produto;
import geradorEtiqueta.gerador.service.ProdutosService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/produto")
public class ProdutosController {

    @Autowired
    private ProdutosService produtosService;

    public ProdutosController(ProdutosService produtosService) {
        this.produtosService = produtosService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Produto> getByCodigoProduto(@PathVariable String codigoCliente){
        Produto produto= this.produtosService.findByCodigoProduto(codigoCliente);
        return ResponseEntity.ok(produto);
    }

    @GetMapping("/produtos")
    public ResponseEntity<List<Produto>> getListaProdutos(){
        List<Produto> produtos= this.produtosService.listarTodosProdutos();
        return ResponseEntity.ok(produtos);
    }

}
