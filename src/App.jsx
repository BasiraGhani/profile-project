import './App.css';
import avatorImage from './assets/profile.jpg'
import profilePage from './components/profilePage';

function App() {
const user = {
  name: 'Ghani',
  username: 'ghani123',
  avatorImage: avatorImage,
  xp:80,
  lastActive:"Dec 20 2025",
  streakDays:2,
  logestStreak:2,
  recentBadgeText:"no badge yet",

  personalinformation:{
    email:"basira.ghani@yahoo.com",
    phone:"+93700234567",
    Gender:"female",
    Country:"Afghanistan",
    "province or state":"kabul",
    "teaching experience":"21",
    "Date of Birth":"20/8/1995",
    "online partpico link":"N/A",
    "linkedin link":"open the link",
    lanuage:"English, dari",
    Bio: "Mentor @CodeToInspire",
  },
  accountDetail:{
    Role:"Mentor",
    Status:"active",
    Verification:"verified",
  }
}

  return (
    <div className='page'>
      <profilePage user={user}></profilePage>

    </div>
  )

   
}

export default App
