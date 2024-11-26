'use client'
import Link from "next/link";
import {  useState } from "react";
import { createUser } from "../../../firebase";

export default function createuser() {
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const handleSignUp = () => {
  createUser(email, password)
  }
  return(
    <div className="createcontainer">
      <p>Let you create user</p>
      <Link href={"/"} className="back">back to Home</Link>
      <form>
        <p className="font">ユーザー作成</p>
        <input className="createname"  type="text" onChange={(e) => ( setEmail(e.target.value) )} placeholder="Username"/>
        <input className="createpass"type="password" onChange={(e) => ( setPassword(e.target.value) )} placeholder="Password" />
        <button className="login2" type="button" onClick={handleSignUp}>ログイン</button>
      </form>
    </div>
  );
}