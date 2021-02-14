package com.ibm.rest.restfulwebservices.todos;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TodoJpaResource {

	@Autowired
	TodoHardcodedService todoHardcodedService;

	@Autowired
	TodoJpaRepository todoJpaRepository;
	
	@GetMapping("jpa//users/{username}/todos")	
	public List<Todo> getAllTodos(@PathVariable String username) {
		return todoJpaRepository.findByUsername(username);
		//return todoHardcodedService.findAll();
	}
	
	@GetMapping("jpa/users/{username}/todos/{id}")
	public Todo getTodo(@PathVariable String username, @PathVariable long id) {
		// Thread.sleep(3000);
		//return todoHardcodedService.findById(id);
		return todoJpaRepository.findById(id).get();
	}
	
	@DeleteMapping("jpa/users/{username}/todos/{id}")	
	public ResponseEntity<Void> getAllTodos(@PathVariable String username ,@PathVariable long id) {
		System.out.println("username: " + username);
		System.out.println("id: " + id);
		todoJpaRepository.deleteById(id);
		return ResponseEntity.noContent().build();
		
	}
	
		//Edit/Update a Todo
		//PUT /users/{user_name}/todos/{todo_id}
		@PutMapping("jpa/users/{username}/todos/{id}")
		public ResponseEntity<Todo> updateTodo(@PathVariable String username,@PathVariable long id, @RequestBody Todo todo){
			todo.setUsername(username);
			Todo todoUpdated = todoJpaRepository.save(todo);			
			return new ResponseEntity<Todo>(todoUpdated, HttpStatus.OK);
		}
	
		@PostMapping("jpa/users/{username}/todos")
		public ResponseEntity<Void> createTodo(@PathVariable String username, @RequestBody Todo todo){
			System.out.println(todo);
			todo.setUsername(username);
			Todo createdTodo = todoJpaRepository.save(todo);
			
			//Location
			//Get current resource url
			///{id}
			URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
			
			return ResponseEntity.created(uri).build();
		}
			
	
}
