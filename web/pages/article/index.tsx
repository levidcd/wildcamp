import Layout from "../../components/Layout";
import { Timeline, Button } from "antd";

const IndexPage = () => (
  <div>
    {" "}
    <Button type="primary">Primary Button</Button>
    <Layout title="Articles">
      <Timeline>
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
      </Timeline>
    </Layout>
  </div>
);

export default IndexPage;
