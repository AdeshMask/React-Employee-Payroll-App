import React, { Component} from "react";
import './payroll-form.css';
import icons1 from './add-24px.svg'
import { Link,withRouter  } from 'react-router-dom';
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
        console.log(this.props)
    }
    

    deleteEmployee = (employeeId) => {
        let id = parseInt(employeeId)
        EmployeeService.deleteEmployee(id);
        window.location.reload();
    };
    updateEmployee = (employeeId) => {
       this.props.history.push(`EmployeeForm/${employeeId}`);
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
					<th>Profile</th>
					<th>Name</th>
					<th>Gender</th>
					<th>Department</th>
					<th>Salary</th>
					<th>Start Date</th>
                    <th>Notes</th>
					<th>Actions</th>
				</tr>
				<tbody>
                    {this.state.employee && this.state.employee.map((employees,index) => (
                        <tr key={`${index}`}>                             
                            <td>
                                <img src={ employees.profilePic=== "../../assests/Ellipse -3.png" ? profile3 :
                                employees.profilePic=== "../../assests/Ellipse -1.png" ? profile1 :
                                employees.profilePic=== "../../assests/Ellipse -7.png" ? profile7 : profile8 
                                } alt="ProfilePic" srcSet="" /></td>
                            <td>{employees.name}</td>
                            <td>{employees.gender}</td>
                            <td>
                            {employees.department.map(dep =>
                            <div className="dept-label" id="dept"> {dep} </div>)}
                            </td>
							<td>{employees.salary}</td>
							<td>{employees.startDate}</td>
                            <td>{employees.note}</td>
                            <td>
                            <img src={Delete} alt="delete" onClick={() =>
                                                    this.deleteEmployee(employees.id)}/>
                            
                            <img src={Edit} alt="edit" onClick={() =>
                                                    this.updateEmployee(employees.id)} />
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
export default withRouter(Home);