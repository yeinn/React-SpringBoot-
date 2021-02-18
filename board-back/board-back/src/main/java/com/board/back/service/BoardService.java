package com.board.back.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.board.back.model.Board;
import com.board.back.repository.BoardRepository;


@Service
public class BoardService {

	@Autowired
	private BoardRepository boardRepository;
	
	// get boards data
	public List<Board> getAllBoard() {
		return boardRepository.findAll();
	}
	public Board createBoard(Board board) {
		return boardRepository.save(board);
	}

}