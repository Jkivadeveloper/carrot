import { useState } from "react";
import { Form, Input, Button, Card, Checkbox } from "antd";

const { TextArea } = Input;

const CreateTask = () => {
const [isComplete, setIsComplete] = useState(false);

const handleCheckboxChange = (e) => {
setIsComplete(e.target.checked);
};

const handleSubmit = (values) => {
// Handle form submission
console.log(values);
};

return (
<Card title="New Task" style={{ margin: 20 }}>
<Form layout="vertical" wrapperCol={{ span: 8 }} onFinish={handleSubmit}>
<Form.Item label="Title" name="title" required>
<Input placeholder="Enter Title" />
</Form.Item>
<Form.Item label="Description" name="description" required>
<TextArea rows={4} placeholder="Enter description" />
</Form.Item>
<Form.Item>
<Checkbox checked={isComplete} onChange={handleCheckboxChange}>
Mark as complete
</Checkbox>
</Form.Item>
<Form.Item>
<Button type="primary" htmlType="submit">
Submit
</Button>
</Form.Item>
</Form>
</Card>
);
};

export default CreateTask;