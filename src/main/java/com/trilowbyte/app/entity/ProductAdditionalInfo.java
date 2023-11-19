package com.trilowbyte.app.entity;

import jakarta.persistence.*;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Getter
@Setter
@Entity
public class ProductAdditionalInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "infId")
    private Long id;
    @Column(name = "fieldType")
    private String fieldType;
    @Column(name = "fieldName")
    private String fieldName;
    @Column(name = "value")
    private String value;
//    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
//    @JoinColumn(name = "id")
//    private Product product;
}
