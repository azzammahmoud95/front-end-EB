import React from "react";
import Layout from "../../Components/Layout/layout";
import Card from "../../Components/Card/card";
import Input from "../../Components/Input/input";

export default function LunchTest() {
  return (
    <Layout>
      <div className="question-child">
      <div style={{height:'20px'}}>s</div>

        <Card question={'Tell Us about Yourself'} subQuestion={'Your Details Personalize Your Journey  And Enhance Accuracy, Securely Stored And Private'}>
            <label>Full Name</label>
            <Input placeholder={'name'}/>
            <label>Email</label>
            <Input placeholder={'email'}/>
        </Card>
      </div>
    </Layout>
  );
}
