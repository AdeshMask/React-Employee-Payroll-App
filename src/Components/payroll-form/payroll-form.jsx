import React, { Component, useState } from "react";
import './payroll-form.css';
import icons1 from './add-24px.svg'
import { Link } from 'react-router-dom';
import Delete from '../../Components/payroll-form/delete-black-18dp.svg';
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

	render() {
    return (
        <div>
           
            <div class="main-content">
		<div class="header-content">
			<div class="emp-detail-text">
				Employee Details<div class="emp-count">10</div>
			</div>
			<a><Link to="/add" class="add-button">
			<img src={icons1} alt="" /> Add User</Link></a>
		</div>

		<div class="table-main">
			<table id="table-display" class="table">
				<tr>
					<th></th>
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
                                        
                                        <td><img src={employee.profilePic} alt="ProfilePic" srcset="" /></td>
                                        <td>{employee.name}</td>
                                        <td>{employee.gender}</td>
                                        <td>
                                            {employee.department.map(dep =>
                                                <div className="dept-label" id="dept"> {dep} </div>)}
                                        </td>
										<td>{employee.salary}</td>
										<td>{employee.startDate}</td>
                                        <td>
                                            <img
                                                name={employee.id}
                                                src={Delete}
                                                alt="delete"
                                                onClick={() =>
                                                    this.deleteEmployee(employee.id)
                                                }
                                            />
                                            <img
                                                name={employee.id}
                                                src="{edit1}"
                                                alt="edit"
                                                onClick={() =>
                                                    this.updateEmployee(employee.id)
                                                }
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
			</table>
            
		</div>
	</div>

        </div>
    )
}
}

export default Home;