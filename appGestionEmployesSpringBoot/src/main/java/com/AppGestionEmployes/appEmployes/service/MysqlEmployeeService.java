//package com.AppGestionEmployes.appEmployes.service;
//
//import com.AppGestionEmployes.appEmployes.model.Employee;
//import com.AppGestionEmployes.appEmployes.repository.EmployeeRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@Service
//public class MysqlEmployeeService {
//
//    @Autowired
//    private EmployeeRepository employeeRepository;
//
//    public List<Employee> getEmployees() {
//        List<Employee> employees = new ArrayList<>();
//        employeeRepository.findAll().forEach(employee -> {
//            employees.add(employee);
//        });
//        return employees;
//    }
//
//    public Employee getEmployee(long id) { return employeeRepository.findById(id).orElse(null); }
//
//    public void deleteEmployee(long id) { employeeRepository.deleteById(id);  }
//
//    public void addEmployee(Employee employee) {
//        employeeRepository.save(employee);}
//
//    public void updateEmployee(Employee employee, long id) { employeeRepository.save(employee); }
//}
