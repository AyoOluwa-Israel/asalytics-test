import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Card from "../src/components/card";
import Header from "../src/components/header";
import Loader from "../src/components/Loader";
import { getAllAsset } from "../src/services/assetService";
import { Asa } from "../src/types/index";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const { data, isLoading } = getAllAsset();

  if (isLoading) {
    return (
      <div data-testid="loading">
        <Loader />
      </div>
    );
  }
  return (
    <div className="font-primary bg-primary text-black">
      <Head>
        <title>ASAlytics</title>
        <link rel="icon" href="/assets/favicon.svg" />
        <meta name="description" content="ASAltyics Test" />
        <meta name="author" content="Israel AyoOluwa" />
      </Head>

      <Header />

      <h1
        className="md:text-[36px] font-medium md:w-[45%] w-[80%] mx-auto text-center my-[2em] text-[22px]"
        data-aos="fade-in"
        data-aos-duration="1500"
      >
        List of Algorand Standard Assets on ASAlytics
      </h1>

      <div className="w-[85%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1em]">
        {data?.results.map((assets: any[]) => (
          <Card assets={assets} />
        ))}
      </div>
    </div>
  );
};

export default Home;
