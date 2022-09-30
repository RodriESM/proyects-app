package com.proyectos.springboot.backend.apirest.controllers;

import com.proyectos.springboot.backend.apirest.models.entity.Cliente;
import com.proyectos.springboot.backend.apirest.models.entity.ClienteDTO;
import com.proyectos.springboot.backend.apirest.models.services.IClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.*;
import java.util.stream.Collectors;
// CORS es un mecanimso de control de acceso HTTP para transferencia de archivos

@CrossOrigin(origins = {"http://localhost:4200","*"} )
@RestController
@RequestMapping("/api")
public class ClienteRestController {

    private static final String ERROR = "error";
    private static final String MESSAGE = "mensaje";
    @Autowired
    IClienteService clienteService;

    @GetMapping("/clientes")
    @ResponseStatus(HttpStatus.OK)
    public List<Cliente> getClientes(){
        return clienteService.findAll();
    }

    @GetMapping("/clientes/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> getCliente(@PathVariable(value = "id") Long id) {

        Cliente cliente;
        Map<String, Object> response = new HashMap<>();

        try{
            cliente =  clienteService.findById(id);
        }catch (NoSuchElementException exception){
            response.put(MESSAGE, "Error al realizar la consulta en la base de datos");
            response.put(ERROR, Objects.requireNonNull(exception.getMessage()));
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        if (cliente == null){
            response.put(MESSAGE, "El cliente con ID \"".concat(id.toString().concat("\" no existe en la base de datos.")));
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(cliente, HttpStatus.OK);

    }

    @PostMapping("/clientes")
    public ResponseEntity<Map<String, Object>> createCliente(@Valid @RequestBody ClienteDTO clienteDTO, BindingResult result){

        Cliente cliente;
        Map<String, Object> response = new HashMap<>();

        if(result.hasErrors()){
            List<String> errors = result.getFieldErrors()
                            .stream()
                            .map(err -> "El campo '" + err.getField() + "' " + err.getDefaultMessage())
                            .collect(Collectors.toList());

            response.put("errors", errors);
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }

        try{
            cliente =  clienteService.save(clienteDTO);
        }catch (DataAccessException e){
            response.put(MESSAGE, "Error al realizar la el insert en la base de datos");
            response.put(ERROR, Objects.requireNonNull(e.getMessage()));
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        response.put(MESSAGE, "El cliente ha sido creado con éxito");
        response.put("cliente", cliente);
        return new ResponseEntity<>(response,HttpStatus.CREATED);
    }

    @PutMapping("/clientes/{id}")
    public ResponseEntity<Map<String, Object>> updateCliente(@Valid @RequestBody ClienteDTO clienteDTO, BindingResult result, @PathVariable Long id) {

        Cliente clienteActualizado = null;
        Map<String, Object> response = new HashMap<>();

        if(result.hasErrors()){
            List<String> errors = result.getFieldErrors()
                    .stream()
                    .map(err -> "El campo '" + err.getField() + "' " + err.getDefaultMessage())
                    .collect(Collectors.toList());

            response.put("errors", errors);
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }

        try {
            clienteActualizado = clienteService.update(clienteDTO,id);
        }catch (Exception e){
            response.put(MESSAGE, "Error al actualizar el cliente");
            response.put(ERROR, Objects.requireNonNull(e.getMessage()));
        }

        response.put(MESSAGE, "Cliente actualizado correctamente");
        response.put("cliente", clienteActualizado);

        return new ResponseEntity<>(response,HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/clientes/{id}")
    public ResponseEntity<Map<String, Object>> delete(@PathVariable Long id){
        Map<String, Object> response = new HashMap<>();
        try{
            clienteService.delete(id);

        }catch (DataAccessException e){
            response.put(MESSAGE, "Error al eliminar el cliente de la base de datos");
            response.put(ERROR, Objects.requireNonNull(e.getMessage()));
        }

        response.put(MESSAGE, "Cliente eliminado correctamente");
        return new ResponseEntity<>(response,HttpStatus.OK);
    }
}
