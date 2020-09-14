package com.devsuperior.dvpesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dvpesquisa.entities.Game;

public interface GameRespository extends JpaRepository<Game, Long> {

}
