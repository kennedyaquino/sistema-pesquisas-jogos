package com.devsuperior.dvpesquisa.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dvpesquisa.dto.GameDto;
import com.devsuperior.dvpesquisa.entities.Game;
import com.devsuperior.dvpesquisa.repositories.GameRepository;

@Service
public class GameService {
	
	@Autowired
	private GameRepository repository;
	
	@Transactional(readOnly = true)
	public List<GameDto> findAll(){
		List<Game> list = repository.findAll();
		return list.stream().map(x -> new GameDto(x)).collect(Collectors.toList());
	}

}
