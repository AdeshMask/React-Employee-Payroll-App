import React, {useState} from 'react'
import './add-employee.css'
import profile3 from './Ellipse -3.png'
import profile1 from './Ellipse -1.png'
import profile7 from './Ellipse -7.png'
import profile8 from './Ellipse -8.png'
import { Link } from 'react-router-dom';

const Add = (props) => { 
    /*===============================================================================*/ 
    const departments = ['HR', 'Sales', 'Finance', 'Engineer', 'Others']

    const [formValue, setForm] = useState({
        department: [],
        gender: '',
        salary: '',
        day: '',
        month: '',
        year: '',
        startDate: '',
        notes: '',
        id: '',
        profilePic: '',
        isUpdate: false,
    });

    const onNameChange = (event) => {
        setForm({ ...formValue, [event.target.name]: event.target.value });
        console.log('value is', event.target.value);
    }

    // const onCheckChange = (name) => {
    //     let index = formValue.departmentValue.indexOf(name);
    //     let checkArray = [...formValue.departmentValue];
    //     if (index > -1)
    //         checkArray.splice(index, 1);
    //     else
    //         checkArray.push(name);
    //         setForm({ ...formValue, departmentValue: checkArray });
    // }

    // const check = (name) => {
    //     return formValue.departmentValue && formValue.departmentValue.includes(name)
    // }

    const onCheckChange = (name) => {
        let index = formValue.department.indexOf(name);

        let checkArray = [...formValue.department];

        if (index > -1) checkArray.splice(index, 1);
        else checkArray.push(name);

        setForm({ ...formValue, department: checkArray });
    };

    const check = (name) => {
        return (
            formValue.department &&
            formValue.department.includes(name)
        );
    };

    const submit = (event) => {
        event.preventDefault();

        let employeeObject = {
            name: formValue.name,
            department: formValue.department,
            gender: formValue.gender,
            salary: formValue.salary,
            profilePic: formValue.profilePic,
            startDate: `${formValue.day} ${formValue.month}, ${formValue.year}`,
            notes: formValue.notes
        };
        localStorage.setItem('EmployeeList', JSON.stringify(employeeObject));
        console.log(employeeObject);
    }
    // alert("Employee Added");
    /*===============================================================================*/ 

    return (
        <div>     
            <div className="form-content">
            <form className="form" action="#" onreset="resetForm()"
                onsubmit="save()">
                    
                <div className="row-content">
                    <label for="name" className="label text">Name</label>
                    <input type="text" className="input" id="name" name="name"
                       value={formValue.name} placeholder="Your name.." Required onChange={onNameChange} />
                    <error-output className="text-error" for="name"></error-output>
                </div>
                <div className="row-content">
                        <label className="label text" for="profilePic">Profile image</label>
                        <div className="profile-radio-content">
                            <label>
                                <input type="radio" id="profile1" name="profilePic"
                                    value={profile3} onChange={onNameChange} />
                                <img className="profile" id="image1"
                                    src={profile3} />
                            </label>
                            <label>
                                <input type="radio" id="profile2"
                                    name="profilePic"
                                    value={profile1} onChange={onNameChange} />
                                <img className="profile" id="image2"
                                    src={profile1} />
                            </label>
                            <label>
                                <input type="radio" id="profil3"
                                    name="profilePic"
                                    value={profile7} onChange={onNameChange} />
                                <img className="profile" id="image3"
                                    src={profile7} />
                            </label>
                            <label>
                                <input type="radio" id="profile4"
                                    name="profilePic"
                                    value={profile8} onChange={onNameChange} />
                                <img className="profile" id="image4"
                                    src={profile8} />
                            </label>
                        </div>
                    </div>
                <div className="row-content">
                    <label for="gender" className="label text">Gender</label>
                    <div>
                            <input type="radio" id="male" name="gender"
                                value="male" onChange={onNameChange} />
                            <label for="male" className="text">Male</label>
                            <input type="radio" id="female" name="gender"
                                value="female" onChange={onNameChange} />
                            <label for="female" className="text">Female</label>
                        </div>
                </div>
                <div className="row-content">
                        <label className="row-content" for="department">
                            Department
                        </label>
                        <div className="label-dep">
                            {departments.map((item) => (
                                <span key={item}>
                                    <input
                                        className="checkbox"
                                        type="checkbox"
                                        onChange={() => onCheckChange(item)}
                                        name={item}
                                        checked={check(item)}
                                        value={item}
                                    />
                                    <label className="text" htmlFor={item}>
                                        {item}
                                    </label>
                                </span>
                            ))}
                        </div>
                    </div>
                <div className="row-content">
                    <label for="salary" className="label text">Choose your salary:
                    </label>
                    <input type="range" className="input" name="salary" id="salary"
                        min="300000" max="500000" step="100" value={formValue.salary} onChange={onNameChange}/>
                    <output className="salary-output text" for="salary">400000</output>
                </div>
                <div className="row-content">
                    <label className="label text" for="startDate">Start Date</label>
                    <div>
                        <select value={formValue.day} onChange={onNameChange} id="day" name="day">
                            <option value="" disabled selected>Day</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                        </select>
                        <select value={formValue.month} onChange={onNameChange} name="month" id="month">
                            <option value="" disabled selected>Month</option>
                            <option value="Jan">January</option>
                            <option value="Feb">Febuary</option>
                            <option value="Mar">March</option>
                            <option value="Apr">April</option>
                            <option value="May">May</option>
                            <option value="Jun">June</option>
                            <option value="Jul">July</option>
                            <option value="Aug">August</option>
                            <option value="Sep">September</option>
                            <option value="Oct">October</option>
                            <option value="Nov">November</option>
                            <option value="Dec">December</option>
                        </select>
                        <select value={formValue.year} onChange={onNameChange} name="year" id="year">
                            <option value="" disabled selected>Year</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                        </select>
                    </div>
                </div>
                <div className="row-content">
                    <label for="notes" className="label text">Notes</label>
                    <textarea id="notes" className="input" name="notes"
                        value={formValue.notes} placeholder="" onChange={onNameChange}></textarea>
                </div>
                <div className="buttonParent">
                    <Link to="/" className="resetButton
                        button cancelButton">Cancel</Link>
                    <div className="submit-reset">
                    <button className="button submitButton" id="submitButton" onClick={submit}
                                type="submit">Submit</button>
                        <button type="reset" className="resetButton button">Reset</button>
                    </div>
                </div>
            </form>
        </div>
        </div>
    )
}

export default Add;