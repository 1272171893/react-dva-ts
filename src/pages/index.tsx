import React, { FC } from "react";
import "pages/index.less";
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;
const App: FC = () => {
  return (
    <div className="wh100 login_box relative background_contain">
      <div className="top_center login_from inline_block">
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    </div>
  );
};
export default App;
