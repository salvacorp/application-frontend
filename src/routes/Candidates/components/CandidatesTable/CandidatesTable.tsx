import { Button, Space, Table } from "antd";
import { Candidate } from "../../../../types/Candidate";
import { useNavigate } from "react-router-dom";

import styles from './CandidatesTable.module.scss';

type Props = {
  data: any;
};

const CandidatesTable = ({ data }: Props): JSX.Element => {
  const navigate = useNavigate();

  const handleEdit = (candidate: Candidate) => {
    navigate('/candidates/create', { state: { candidate } });
  }

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Last Name",
      dataIndex: "last",
      key: "last",
    },
    {
      title: "Birthday",
      dataIndex: "birthday",
      key: "birthday",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (text: string, candidate: Candidate) => (
        <Space size="middle">
          <Button onClick={() => handleEdit(candidate)}>edit</Button>
          <a href="/#">delete</a>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        className={styles.table}
        dataSource={data.Items?.map((candidate: Candidate, key: number) => ({
          ...candidate,
          key,
        }))}
      />
    </div>
  );
};

export { CandidatesTable };
