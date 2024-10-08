export default function Createuser() {
  return(
    <div className="createcontainer">
      <p>Let you create user</p>
      <form>
        <p className="font">ユーザー作成</p>
        <input className="createname" type="text" placeholder="Username" />
        <input className="createpass" type="password" placeholder="Password" />
        <button className="login2" type="submit">ログイン</button>
      </form>
    </div>
  );
}