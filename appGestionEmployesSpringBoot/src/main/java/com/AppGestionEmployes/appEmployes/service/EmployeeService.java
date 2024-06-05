package com.AppGestionEmployes.appEmployes.service;

import com.AppGestionEmployes.appEmployes.model.Employee;
import com.AppGestionEmployes.appEmployes.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public List<Employee> getEmployees() {
        return employeeRepository.findAll();
    }

    public Employee getEmployee(String id) {
        return employeeRepository.findById(id).orElse(null);
    }

    public void deleteEmployee(String id) {
        if (employeeRepository.existsById(id)) {
            employeeRepository.deleteById(id);
        } else {
            throw new IllegalArgumentException("Employé avec id " + id + " non trouvé.");
        }
    }

    public Employee addEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public Employee updateEmployee(Employee employee, String id) {
        Optional<Employee> existingEmployee = employeeRepository.findById(id);
        if (existingEmployee.isPresent()) {
            employee.setId(id);
            return employeeRepository.save(employee);
        } else {
            throw new IllegalArgumentException("Employé avec id " + id + " non trouvé.");
        }
    }
}
