package com.proyectos.springboot.backend.apirest.models.services;

import com.proyectos.springboot.backend.apirest.models.entity.Cliente;
import com.proyectos.springboot.backend.apirest.models.entity.ClienteDTO;
import org.springframework.data.crossstore.ChangeSetPersister;

import java.util.List;

public interface IClienteService {

    List<Cliente> findAll();

    Cliente findById(Long id) ;

    Cliente save(ClienteDTO cliente);

    Cliente update(ClienteDTO clienteDTO,Long id);

    void delete(Long id);


}
