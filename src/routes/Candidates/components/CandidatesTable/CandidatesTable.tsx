import { Space, Table } from "antd";
import { Candidate } from "../../../../types/Candidate";

import styles from './CandidatesTable.module.scss';

type Props = {
  data: any;
};

const CandidatesTable = ({ data }: Props): JSX.Element => {
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
      render: (text: string, record: Candidate) => (
        <Space size="middle">
          <a href="/#">edit</a>
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
