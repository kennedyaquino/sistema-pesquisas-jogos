package com.devsuperior.dvpesquisa.services;

import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dvpesquisa.dto.RecordDto;
import com.devsuperior.dvpesquisa.dto.RecordInsertDto;
import com.devsuperior.dvpesquisa.entities.Game;
import com.devsuperior.dvpesquisa.entities.Record;
import com.devsuperior.dvpesquisa.repositories.GameRepository;
import com.devsuperior.dvpesquisa.repositories.RecordRepository;

@Service
public class RecordService {
	
	@Autowired
	private RecordRepository repository;
	
	@Autowired
	private GameRepository gameRepository;
	
	@Transactional
	public RecordDto insert(RecordInsertDto dto) {
		Record entity = new Record();
		entity.setName(dto.getName());
		entity.setAge(dto.getAge());
		entity.setMoment(Instant.now());
		
		Game game = gameRepository.getOne(dto.getGameId());
		entity.setGame(game);
		
		entity = repository.save(entity);
		
		return new RecordDto(entity);
	}

}
