import React, { useState } from "react";
import { Card, Button, Form, Input } from "antd";

const Login = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleEmailChange = (e) => {
setEmail(e.target.value);
};

const handlePasswordChange = (e) => {
setPassword(e.target.value);
};

const handleSignIn = () => {
console.log("Sign in", email, password);
};

const handleSignUp = () => {
console.log("Sign up", email, password);
};

const handleSignOut = () => {
console.log("Sign out");
};

return (
<Card title="Settings" style={{ margin: 20 }}>
<Form>
<Form.Item label="Email">
<Input type="email" value={email} onChange={handleEmailChange} />
</Form.Item>
<Form.Item label="Password">
<Input.Password value={password} onChange={handlePasswordChange} />
</Form.Item>
<Form.Item>
<Button type="primary" onClick={handleSignIn}>
Sign In
</Button>
<Button type="primary" onClick={handleSignUp} style={{ marginLeft: 10 }}>
Sign Up
</Button>
<Button type="primary" onClick={handleSignOut} style={{ marginLeft: 10 }}>
Sign Out
</Button>
</Form.Item>
</Form>
</Card>
);
};

export default Login