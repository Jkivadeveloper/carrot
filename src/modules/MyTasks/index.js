import { Card, Table, Tag } from 'antd';
import { useNavigate } from 'react-router-dom';
import task from '../../assets/data/task.json';

const MyTasks = () => {
  const navigate = useNavigate();
  
  const renderOrderStatus = (taskStatus) => {
    if (taskStatus === 'Delete') {
      return <Tag color={'green'}>{taskStatus}</Tag>
    }
  
  };

  const tableColumns = [
    {
      title: 'Task ID',
      dataIndex: 'taskID',
      key: 'taskID',
    },
    {
      title: 'title',
      dataIndex: 'title',
      key: 'title'
    },
   
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: renderOrderStatus
    }
  ];

  return (
    <Card title={'Task'} style={{ margin: 20 }}>
      <Table
        dataSource={task}
        columns={tableColumns}
        rowKey="taskID"
        onRow={(taskItem) => ({
          onClick: () => navigate(`task/${taskItem.taskID}`)
        })}
      />
    </Card>
  )
};

export default MyTasks;