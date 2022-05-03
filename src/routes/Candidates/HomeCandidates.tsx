import { Link } from "react-router-dom";
import { Table, Space } from "antd";

import { Layout } from "../../components";
import { Candidate } from "../../types/Candidate";
import { useHomeCandidate } from "./useHomeCandidate";

const HomeCandidates = (): JSX.Element => {
  const { data = [] }: any = useHomeCandidate();

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Laste Name",
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
    <Layout>
      <h2>Candidates</h2>

      <Link
        to="/candidates/create"
        style={{
          color: "#fafafa",
          textDecoration: "none",
          border: "1px solid #fafafa",
          padding: "3px 12px",
          borderRadius: "8px",
        }}
      >
        + add candidate
      </Link>

      <Table
        columns={columns}
        dataSource={data.Items?.map((candidate: Candidate, key: number) => ({
          ...candidate,
          key,
        }))}
      />
    </Layout>
  );
};

export { HomeCandidates };
