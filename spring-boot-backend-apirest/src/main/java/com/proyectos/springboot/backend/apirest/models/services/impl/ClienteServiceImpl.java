package com.proyectos.springboot.backend.apirest.models.services.impl;

import com.proyectos.springboot.backend.apirest.models.repository.IClienteRepository;
import com.proyectos.springboot.backend.apirest.models.entity.Cliente;
import com.proyectos.springboot.backend.apirest.models.entity.ClienteDTO;
import com.proyectos.springboot.backend.apirest.models.services.IClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;

@Service
public class ClienteServiceImpl implements IClienteService {

    @Autowired
    IClienteRepository clienteRepository;

    @Override
    @Transactional(readOnly = true) // Permite si se modifican o no estos datos
    public List<Cliente> findAll() {
        return (List<Cliente>) clienteRepository.findAll();
    }

    @Transactional(readOnly = true) // Permite si se modifican o no estos datos
    public Cliente findById(Long id) {
        return clienteRepository.findById(id).orElse(null);
    }

    @Override
    @Transactional // Permite si se modifican o no estos datos
    public Cliente save(ClienteDTO clienteDTO) {
        Cliente cliente = new Cliente();
        cliente.setNombre(clienteDTO.getNombre());
        cliente.setApellido(clienteDTO.getApellido());
        cliente.setEmail(clienteDTO.getEmail());
        cliente.setFoto(clienteDTO.getFoto());
        return clienteRepository.save(cliente);
    }

    @Transactional // Permite si se modifican o no estos datos
    public Cliente update(ClienteDTO clienteDTO,Long id) {
        Cliente cliente = findById(id);
        cliente.setNombre(clienteDTO.getNombre());
        cliente.setApellido(clienteDTO.getApellido());
        cliente.setEmail(clienteDTO.getEmail());
        cliente.setFoto(clienteDTO.getFoto());
        return clienteRepository.save(cliente);
    }

    @Override
    @Transactional // Permite si se modifican o no estos datos
    public void delete(Long id) {
        clienteRepository.deleteById(id);
    }
}