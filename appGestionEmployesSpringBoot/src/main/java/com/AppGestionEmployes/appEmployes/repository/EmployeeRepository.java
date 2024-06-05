package com.AppGestionEmployes.appEmployes.repository;

import com.AppGestionEmployes.appEmployes.model.Employee;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends MongoRepository<Employee, String> {
}



//@Repository
//public interface EmployeeRepository extends CrudRepository<Employee, Long> {
//}
