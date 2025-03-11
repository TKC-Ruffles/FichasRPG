package com.rpgapp.controller;

@RestController
@RequestMapping("/api/fichas")
public class FichaController {

    @PostMapping
    public ResponseEntity<Ficha> criarFicha(@RequestBody FichaDTO fichaDTO) {
        // Lógica de criação
    }

    @GetMapping("/compartilhadas")
    public List<Ficha> listarFichasCompartilhadas() {
        // Lógica de listagem
    }
}