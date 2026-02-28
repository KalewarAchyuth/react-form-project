import "./App.css"
import { useState } from "react"



export default function App() {

    const [formData, setFormData] = useState(
        {
            user : "",
            email : "",
            pass : ""
        }
    );

    function handleSubmit(e){
        e.preventDefault();
        console.log(formData);

        setFormData({
            user: "",
            email: "",
            pass: ""
        });
    }

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        });
    }

    return(
        <>
            
            <h1 style={{marginBottom: "10px", textAlign: "center" }}> Registration Form</h1>
                
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="user">Username : </label>
                    <input 
                        type="text"
                        placeholder="username"
                        name="user"
                        value={formData.user}
                        onChange={handleChange}
                        id="user"
                    />
                </div>

                <div>
                    <label htmlFor="email">Email : </label>
                    <input 
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        id="email"
                    />
                </div>

                <div>
                    <label htmlFor="pass">Password : </label>
                    <input 
                        type="password"
                        placeholder="Password"
                        name="pass"
                        value={formData.pass}
                        onChange={handleChange}
                        id="pass"
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
            <p style={{ marginTop: "10px", textAlign: "center" }}>
                &copy; made by Achyuth Kalewar
            </p>

        </>
    )
}