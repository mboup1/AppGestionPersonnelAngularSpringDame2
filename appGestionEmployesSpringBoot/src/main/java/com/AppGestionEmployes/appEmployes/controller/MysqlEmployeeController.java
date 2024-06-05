//package com.AppGestionEmployes.appEmployes.controller;
//
//import com.AppGestionEmployes.appEmployes.model.Employee;
//import com.AppGestionEmployes.appEmployes.service.EmployeeService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//public class MysqlEmployeeController {
//    @Autowired
//    private EmployeeService employeeService;
//
//
//    @RequestMapping(method = RequestMethod.GET, value = "/employees")
//    public List<Employee> getEmployees(){return employeeService.getEmployees();}
//
//    @RequestMapping(method = RequestMethod.GET, value = "/employee/{id}")
//    public Employee getEmployee(@PathVariable long id){return employeeService.getEmployee(id); }
//
//    @RequestMapping(method = RequestMethod.DELETE, value = "/employee/{id}")
//    public void deleteEmployee(@PathVariable long id){
//        employeeService.deleteEmployee(id);}
//
//    @RequestMapping(method =  RequestMethod.POST, value = "/employee/{id}")
//    public void addEmployee(@RequestBody Employee employee){
//        employeeService.addEmployee(employee);}
//
//    @RequestMapping(method =  RequestMethod.PUT, value = "/employee/{id}")
//    public void updateEmployee(@RequestBody Employee employee, @PathVariable long id){
//        employeeService.updateEmployee(employee, id);
//    }
//
//}
