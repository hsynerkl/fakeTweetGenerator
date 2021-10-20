import React,{useState} from 'react';
import "./style.scss"
import imgT from './images/twitter.png'
import { ReplyIcon } from './icons';
import { RetweetIcon } from './icons';
import { HeartIcon } from './icons';
import { DownloadIcon } from './icons';
import { VerifiedIcon } from './icons';


const formatNumbers=(number)=>{
  if(!number){
    number =0;
  }
  if(number <1000){
    return number;
  }
  number /= 1000;
  number =String(number).split('.');
  return(number[0]+(number[1]>100 ?',' +number[1].slice(0, 1)+'B':'B'))
}



export default function App(){
  
  const [name,setName] = useState();
  const [userName,setUsername] =useState();
  const [isVerified,setIsVerified]=useState(0);
  const [tweet,setTweet]=useState();
  const [avatar,setAvatar]=useState();
  const [retweet, setRetweets]=useState();
  const [quoteTweets,setQuoteTweets]=useState();
  const [like,setLikes]=useState();

  const avatarHandle=(e)=>{
    const file = e.target.files[0];
    const reader = new  FileReader();
    reader.addEventListener('load',function(){
      setAvatar(this.result)
    });
    reader.readAsDataURL(file)
   }
   
  return (
    <>
    <div className="tweet-settings">
      <h3>Tweet ayarları</h3>
      <ul>
        <li>
          <input type="text" className="input" placeholder="Ad soyad" maxLength="25" value={name} onChange={(e)=>setName(e.target.value)}></input>
        </li>
        <li>
          <input type="text" className="input" placeholder="Kullanıcı adı" maxLength="25"  value={userName} onChange={(e)=>setUsername(e.target.value)}></input>
        </li>
        <li>
          <textarea placeholder="Tweetinizi girin" value={tweet} onChange={(e)=>setTweet(e.target.value)}/>
        </li>
        <li>
          <label>Retweet</label>
          <input type="number" 
          className="input" 
          min="0"
          placeholder="0"
          value={retweet}
           onChange={(e)=>setRetweets(e.target.value)}></input>
        </li>
        <li>
        <label>Alıntı tweet</label>
          <input type="number" 
          className="input" 
          min="0"
          placeholder="0"
          value={quoteTweets}
           onChange={(e)=>setQuoteTweets(e.target.value)}></input>
        </li>
        <li>
        <label>Beğeni</label>
        <input type="number" 
          className="input" 
          min="0"
          placeholder="0"
          value={like}
           onChange={(e)=>setLikes(e.target.value)}></input>
        </li>
        <li>
        <label>Avatar</label>
        <input
          type="file" 
          className="input" 
          onChange={avatarHandle}
        ></input>
        </li>
        <li>
          <label>Rozet</label>
          <select value={isVerified} onChange={(e)=>setIsVerified(e.target.value)}>
            <option value="1">Olsun</option>
           <option value="2">Olmasın</option>
          </select>

        </li>
      </ul>
    </div>
     <div className="tweet-container">
      <div className="tweet">
        <div className="tweet-author">
        {avatar ? <img src={avatar}/> : <img src={imgT}/> }
       <div>
         <div className="name">{name || "Hüseyin Erkal"} {isVerified ==1 ? <VerifiedIcon width="19" height="19"/> :null }</div>
         <div className="username">{userName || "@hsynerkal"}</div>
       </div>
      </div>
      <div className="tweet-content">
        <p>{tweet || "Bu tweet Hüseyin Erkal'a opsiyonlanmıştır."}</p>
      </div>
      <div className="tweetDate">18:49 PM · Oct 18, 2021·Twitter for iPhone</div>
      <div className="tweet-stats">
        <span><b>{formatNumbers(retweet) || 0}</b> Retweet</span>
        <span><b>{formatNumbers(quoteTweets) || 0}</b> Alıntı Tweetler</span>
        <span><b>{formatNumbers(like) || 0}</b> Beğeni</span>
      </div>
      <div className="tweet-actions">
        <span><ReplyIcon/></span>
        <span><RetweetIcon/></span>
        <span><HeartIcon/></span>
        <span><DownloadIcon/></span>
      </div>
    </div>

   </div>
   </>
  );
}