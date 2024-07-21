package com.mycompany.petlovebackend.controller;

import com.mycompany.petlovebackend.model.Produto;
import com.mycompany.petlovebackend.model.Venda;
import com.mycompany.petlovebackend.repository.ProdutoRepository;
import com.mycompany.petlovebackend.repository.VendaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/vendas")
public class VendaController {

    @Autowired
    private VendaRepository vendaRepository;

    @Autowired
    private ProdutoRepository produtoRepository;

    @GetMapping
    public List<Venda> getAllVendas() {
        return vendaRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Venda> getVendaById(@PathVariable Long id) {
        Optional<Venda> venda = vendaRepository.findById(id);
        return venda.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Venda> createVenda(@RequestBody Venda venda) {
        Produto produto = produtoRepository.findById(venda.getProduto().getId()).orElse(null);
        venda.setProduto(produto);
        Venda savedVenda = vendaRepository.save(venda);
        return ResponseEntity.ok(savedVenda);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteVenda(@PathVariable Long id) {
        if (vendaRepository.existsById(id)) {
            vendaRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
