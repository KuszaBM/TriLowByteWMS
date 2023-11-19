package com.trilowbyte.app.entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Getter
@Setter
@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name ="id")
    private Long productId;
    @Column(name ="productName")
    private String name;
    @Column(name ="productionCost")
    private float cost;
    @Column(name = "weightInGrams")
    private int weightInGrams;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ProductAdditionalInfo> additionalInfos = new ArrayList<>();

}
