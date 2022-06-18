import axios from "axios";

class EmployeePayroll {
    baseUrl ="http://localhost:8080/employee";

    addEmployee(data) {
        return axios.post(`${this.baseUrl}/add`, data);
      }
    
      getAllEmployees() {
        return axios.get(`${this.baseUrl}/show`);
      }

      getEmployeeById(employeeId) {
        return axios.get(`${this.baseUrl}/search/${employeeId}`);
      }

      updateEmployee(employeeId,data) {
        return axios.put(`${this.baseUrl}/edit/${employeeId}`, data);
      }

      deleteEmployee(employeeId) {
        return axios.delete(`${this.baseUrl}/remove/${employeeId}`);
      }

}


export default new EmployeePayroll();