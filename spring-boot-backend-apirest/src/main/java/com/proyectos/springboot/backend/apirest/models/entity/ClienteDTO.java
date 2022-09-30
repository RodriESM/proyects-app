package com.proyectos.springboot.backend.apirest.models.entity;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;


import java.util.Date;

@RequiredArgsConstructor
@Getter
@Setter
public class ClienteDTO {
    private Long id;

    private String nombre;
    private String apellido;
    private String email;
    private String foto;
    private Date createAt;
}
