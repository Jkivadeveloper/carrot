import { Card,  Divider, List, Button } from "antd";
import tasks from '../../assets/data/tasks.json';

import { useParams } from "react-router-dom";

const DetailedTask = () => {
  const {id} = useParams();
  
  return (
    <Card title={`Task ${id}`} style={{ margin: 20 }}>
     
      <Divider />
      <List
        dataSource={tasks}
        renderItem={(tasksItem) => (
          <List.Item>
            <div style={{ fontWeight: "bold" }}>
              {tasksItem.description} 
            </div>
          </List.Item>
        )}
      />
      <Divider />
     
      <Divider />
      <div style={styles.buttonsContainer}>
        <Button block type="danger" size="large" style={styles.button}>
          Delete Task
        </Button>
       
      </div>
     
    </Card>
  )
};

const styles = {
  totalSumContainer: {
    flexDirection: "row",
    display: "flex",
  },
  totalPrice: {
    marginLeft: "auto",
    fontWeight: "bold",
  },
  buttonsContainer: {
    display: "flex",
    paddingBottom: 30,
  },
  button: {
    marginRight: 20,
    marginLeft: 20,
    backgroundcolor:'red',
  },
};

export default DetailedTask;