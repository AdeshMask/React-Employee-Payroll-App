import axios from "axios";

class EmployeePayroll {
    baseUrl ="http://localhost:8080/employee";

    addEmployee(data) {
        return axios.post(`${this.baseUrl}/add`, data);
      }
    
      getAllEmployees() {
        return axios.get(`${this.baseUrl}/show`);
      }
}


export default new EmployeePayroll();