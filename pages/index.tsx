import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../src/components/header";
import { getAllAsset } from "../src/services/assetService";

const Home: NextPage = () => {
  const { data } = getAllAsset();
  console.log("first", data?.results);
  return (
    <div className="font-primary bg-primary text-black">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <h1 className="text-[36px] font-medium w-[45%] mx-auto text-center my-[2em]">
        List of Algorand Standard Assets on ASAlytics
      </h1>
    </div>
  );
};

export default Home;
