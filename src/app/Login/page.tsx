'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "../../../firebase";

// const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setValue(e.target.value)
// }

export default function Login() {
    const [ value, setValue ] = useState("")
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const handleSignUp = () => {
      signIn(email, password)}
  return (
    <div className="container">
        <form>
        <p className="fsize">ログイン画面</p>
        <input className="username" type="text" onChange={(e) => ( setEmail(e.target.value) )} placeholder="Username" />
        <input className="pass" type="password" onChange={(e) => ( setPassword(e.target.value) )} placeholder="Password" />
        <button className="login2" type="button" onClick={handleSignUp}>ログイン</button>
      </form>
      <Link href={"/"} className="back">back to Home</Link>
      <Link href={"/createuser"} className="create">create user</Link>
    </div>
    )};