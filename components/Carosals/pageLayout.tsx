import Head from "next/head";
import * as React from "react";

export default function pageLayout() {
  return (
    <div>
      {/* HEAD */}
      <Head>
        <title>IHCL Taj Hotels</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon2.ico" />
      </Head>
    
      <div className={"navbar"}>
        <ul className="navbar_list">
          <li className="navbar_list_items">BRANDS</li>
          <li className="navbar_list_items">COMPANY</li>
          <li className="navbar_list_items">INVESTORS</li>
          <li className="navbar_list_items">DEVELOPMENT</li>
          <li className="navbar_list_items">RESPONSE</li>
          <li className="navbar_list_items">CAREERS</li>
          <li className="navbar_list_items">PRESSROOM</li>
          <li className="navbar_list_items">CONTACT</li>
        </ul>
      </div>
    </div>
  );
}
