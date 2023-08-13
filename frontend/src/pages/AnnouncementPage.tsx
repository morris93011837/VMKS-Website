import { useNavigate } from "react-router-dom"
import React, { useState } from "react"

const AnnouncementPage = () => {
  const navigate = useNavigate();
  let counts=0;

  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const formSubmit = () => {
    counts++;
    const newAnnouncement = document.createElement("a");
    const tmp = document.getElementById("Title") as HTMLInputElement;
    newAnnouncement.textContent = tmp.value;
    newAnnouncement.href = "/Announcement/"+counts;
    setTitle("");
    setContent("");
    setVisible(false);
  }


  return (
    <>
      <div>公告一覽</div>
      <p>應該要有所有公告連結</p>
      <div id="announcements">
        <a href={"/Announcement/"+counts}>範例公告</a>
      </div>
      
      <button onClick={() => setVisible(true)}>新增公告</button>

      {visible && (
      <form onSubmit={formSubmit}>
        <p>標題</p>
          <input 
            id="Title"
            value={title}
          />
        <p>內文</p>
          <input
            id="Content"
            value={content}
          />
        <br></br><br></br>
          <button type="submit">提交</button>
          <button onClick={() => setVisible(false)}>取消</button>
      </form>
      )}
      
      <br></br>
      <button onClick={() => navigate(-1)}>go back</button>
    </>
  )
}

export default AnnouncementPage