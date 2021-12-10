import Layout from "./shared/Layout";
import MyPage from "./pages/MyPage";
import { ThemeProvider } from "styled-components";
import theme from "./shared/theme";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <MyPage></MyPage>
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;
