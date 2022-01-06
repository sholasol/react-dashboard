import "./newuser.css"

export default function Newuser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form  className="newUserForm">
                <div className="newFormItem">
                    <label>Username</label>
                    <input type="text" placeholder="John" />
                </div>
                <div className="newFormItem">
                    <label>Fullanem</label>
                    <input type="text" placeholder="John" />
                </div>
                <div className="newFormItem">
                    <label>Email</label>
                    <input type="email" placeholder="john@email.com" />
                </div>
                <div className="newFormItem">
                    <label>Password</label>
                    <input type="password" placeholder="Password" />
                </div>
                <div className="newFormItem">
                    <label>Phone</label>
                    <input type="text" placeholder="+234908760980" />
                </div>
                <div className="newFormItem">
                    <label>Gender</label>
                    <div className="newUserGenderContainer">
                        <input type="radio" name="gender" id="male" value="male"/>
                        <label for="Male">Male</label>
                        <input type="radio" name="gender" id="female" value="female"/>
                        <label for="Female">Female</label>
                    </div>
                </div>
                <div className="newFormItem">
                    <label>Address</label>
                    <input type="text" placeholder="New York USA" />
                </div>
                <div className="newFormItem">
                    <label htmlFor="">Active</label>
                    <select className="newUserSelect" name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}
