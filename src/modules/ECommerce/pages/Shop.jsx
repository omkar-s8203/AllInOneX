import { useEffect, useState } from "react";

function Shop() {
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    // Fetch users from the backend
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:3000/users');
            if (response.ok) {
                const data = await response.json();
                setUsers(data);  // Ensure the response is a valid array
            } else {
                console.error("Failed to fetch users:", response.statusText);
            }
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent form from reloading the page
        if (!formData.name || !formData.email || !formData.password) {
            alert("Please fill out all fields!");
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), // Sending the whole formData, including name, email, and password
            });

            if (response.ok) {
                setFormData({ name: '', email: '', password: '' }); // Reset form
                fetchUsers(); // Refresh user list
            } else {
                const error = await response.json();
                console.error("Failed to add user:", error.message);
            }
        } catch (error) {
            console.error("Error adding user:", error);
        }
    };

    return (
        <>
            <h2>This is the shop page!</h2>
            <h2>User Registration</h2>

            {/* Registration Form */}
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <h4>
                        Name: 
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </h4>
                    <h4>
                        Email: 
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </h4>
                    <h4>
                        Password: 
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                    </h4>
                    <button type="submit">Submit</button>
                </form>
            </div>

            {/* User List */}
            <h2>User List</h2>
<div>
<h2>User List</h2>
<div>
    <h1>Users</h1>
    <table className="user-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {users.length > 0 ? (
                users.map((userd, index) => (
                    <tr key={index}>
                        <td>{userd.user_name}</td>
                        <td>{userd.user_email}</td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan="2">No users found.</td>
                </tr>
            )}
        </tbody>
    </table>
</div>

</div>

        </>
    );
}

export default Shop;
