import React, { Component, useState } from "react";
import './payroll-form.css';
import icons1 from './add-24px.svg'
import { Link } from 'react-router-dom';
import Delete from '../../Components/payroll-form/delete-black-18dp.svg';
import Edit from '../../Components/payroll-form/create-black-18dp.svg';
import profile3 from '../../assests/Ellipse -3.png'
import profile1 from '../../assests/Ellipse -1.png'
import profile7 from '../../assests/Ellipse -7.png'
import profile8 from '../../assests/Ellipse -8.png'
import EmployeeService from '../../service/EmployeePayroll'


class Home extends Component {

	constructor(props) {
        super(props);
        this.state = {
            employee: [],
        };
    }

	fetchData() {
        EmployeeService.getAllEmployees().then((response) => {
            this.setState({ employee: response.data.data });
        });
    }

    componentDidMount() {
        this.fetchData();
    }

    deleteEmployee = (employeeId) => {
        let id = parseInt(employeeId)
        EmployeeService.deleteEmployee(id);
        window.location.reload();
    };

    updateEmployee = (employeeId) => {
        this.history.push(`add-employee/${ employeeId}`)
    };
	render() {
    return (
        <div>         
            <div className="main-content">
		<div className="header-content">
			<div className="emp-detail-text">
				Employee Details<div className="emp-count">{this.state.employee.length}</div>
			</div>
			<Link to="/add" className="add-button">
			<img src={icons1} alt="" /> Add User</Link>
		</div>
		<div className="table-main">
			<table id="table-display" className="table">
				<tr>
					<th>Profile Pic</th>
					<th>Name</th>
					<th>Gender</th>
					<th>Department</th>
					<th>Salary</th>
					<th>Start Date</th>
					<th>Actions</th>
				</tr>
				<tbody>
                    {this.state.employee.map((employee) => (
                        <tr key={employee.id}>                             
                            <td>
                                <img src={ employee.profilePic=== "../../assests/Ellipse -3.png" ? profile3 :
                                employee.profilePic=== "../../assests/Ellipse -1.png" ? profile1 :
                                employee.profilePic=== "../../assests/Ellipse -7.png" ? profile7 : profile8 
                                } alt="ProfilePic" srcSet="" /></td>
                            <td>{employee.name}</td>
                            <td>{employee.gender}</td>
                            <td>
                            {employee.department.map(dep =>
                            <div className="dept-label" id="dept"> {dep} </div>)}
                            </td>
							<td>{employee.salary}</td>
							<td>{employee.startDate}</td>
                            <td>
                            <img src={Delete} alt="delete" onClick={() =>
                                                    this.deleteEmployee(employee.id)}/>
                            <img src={Edit} alt="edit" onClick={() =>
                                                    this.updateEmployee(employee.employeeId)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
			</table>
    	</div>
	</div>
</div>)
}
}

export default Home;