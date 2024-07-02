package geradorEtiqueta.gerador.service;

import geradorEtiqueta.gerador.model.Produto;
import geradorEtiqueta.gerador.repository.ProdutoRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProdutosService {

    @Autowired
    private ProdutoRepository produtoRepository;

    public ProdutosService(ProdutoRepository productRepository) {
        this.produtoRepository = productRepository;
    }

    public Produto findByCodigoProduto(String codigoProduto) {
        Produto produto = this.produtoRepository.findByCodigoProduto(codigoProduto);
        return produto;
    }
    
    public List<Produto> listarTodosProdutos(){
        return produtoRepository.findAll();
    }

}
