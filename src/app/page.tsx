'use client'
import { LayoutRouter } from "next/dist/server/app-render/entry-base";
import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [content1, setContent1] = useState<string>('お答えします');
  const [content2, setContent2] = useState<string>('')
  const getAzData = async () => {
    
    try {
      console.log('start',text);
      const response = await fetch(`http://localhost:3000/api/azopenai?message=${encodeURIComponent(text)}`);
      if (response.status !== 200) throw new Error('Failed to fetch tasks');
        const data = await response.json();
        console.log('途中 data : ', data);
        setContent1("");
        setContent2(data[0].message.content) 
        console.log("終わり");  
    } catch (err) {
        console.log('🚀 ~ file: index.tsx:32 ~ getAzData ~ err:', err);
    }
    
  };

  return (
    <div>
      <h1 className="center">Chat JOSHO AI</h1>
      <div className="div">
      <Link href={"/Login"} className="link">＞ Go to Login</Link>
      <form>
        <input
          type="text"
          onChange={(e) => ( setText(e.target.value) )}
          className="input"
          placeholder="聞きたいことを入力してください" required>
        </input>
        <button className="submit" type="button" onClick={getAzData}>⇓</button>
      </form>  
     </div>
      <div className="ai">
      <p className="answer">{content1}</p>
      <p className="answer2">{content2}</p>
      </div>
    </div>
  );
}