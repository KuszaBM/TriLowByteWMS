package com.trilowbyte.app.repositories;

import com.trilowbyte.app.entity.ProductAdditionalInfo;
import org.springframework.data.repository.CrudRepository;

public interface AdditionalItemInfoRepository extends CrudRepository<ProductAdditionalInfo, Long> {
}
