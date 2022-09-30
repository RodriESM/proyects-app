package com.proyectos.springboot.backend.apirest.models.entity;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.Date;

@RequiredArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "clientes")
public class Cliente implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    @Getter
    private Long id;

    @NotEmpty(message = "No puede estar vacío")
    @Size(min = 4, max = 18, message = "El tamaño tiene que estar entre 4 y 18 caracteres")
    @Column(nullable = false)
    private String nombre;

    @NotEmpty(message = "No puede estar vacío")
    private String apellido;

    @NotEmpty(message = "No puede estar vacío")
    @Email(message = "El formato de correo no es correcto")
    @Column(nullable = false, unique = true)
    private String email;

    private String foto;

    @Column(name = "create_at")
    @Temporal(TemporalType.DATE)
    private Date createAt;

    @PrePersist
    public void prePersist(){
        createAt = new Date();
    }

}
