import React from "react";
import Header from "../components/Header";
import MoreViewButton from "../components/MoreViewButton";
import Nav from "../components/Navigtion";
import Review from "../components/Review";
import Layout from "../shared/Layout";

const user = {
  write: true,
  view: false,
};

const MaPage = () => {
  return (
    <>
      <Layout>
        <Header>마이페이지</Header>
        <Nav />
        <Review user={user.write}></Review>
        <Review user={user.view}></Review>
        <MoreViewButton />
      </Layout>
    </>
  );
};

export default MaPage;
