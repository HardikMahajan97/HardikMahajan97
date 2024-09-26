import './App.css'
// import {CSSTransitionGroup} from 'react-transition-group'
import './event.css'
function App() {
  const events = [
    {
      id: 1,
      title: "Hacktoberfest Kickoff Event",
      description: "Join us for the official start of Hacktoberfest!Showcase your skills and collaborate on projects.Hear from experts in the open source communityHear from experts in the open source communityHear from experts in the open source communityHear from experts in the open source communityHear from experts in the open source communityHear from experts in the open source communityHear from experts in the open source community ",
      date: "October 1, 2024",
      time: "10:00:00"
    },
    {
      id: 2,
      title: "Open Source Workshop",
      description: "Learn about contributing to open source projects.Showcase your skills and collaborate on projects.Hear from experts in the open source communityHear from experts in the open source communityHear from experts in the open source communityHear from experts in the open source communityHear from experts in the open source communityHear from experts in the open source communityHear from experts in the open source community",
      date: "October 5, 2024",
      time: "10:00:00"
    },
    {
      id: 3,
      title: "Hacktoberfest Hackathon",
      description: "Showcase your skills and collaborate on projects.Hear from experts in the open source communityHear from experts in the open source communityHear from experts in the open source communityHear from experts in the open source communityHear from experts in the open source communityHear from experts in the open source communityHear from experts in the open source community",
      date: "October 15-17, 2024",
      time: "10:00:00"
    },
    {
      id: 4,
      title: "Open Source Panel Discussion",
      description: "Hear from experts in the open source community.Hear from experts in the open source communityHear from experts in the open source communityHear from experts in the open source communityHear from experts in the open source communityHear from experts in the open source communityHear from experts in the open source communityHear from experts in the open source community",
      date: "October 20, 2024",
      time: "10:00:00"
    },
    {
      id: 5,
      title: "Hacktoberfest Closing Ceremony",
      description: "Celebrate your contributions and achievements.Showcase your skills and collaborate on projects.Hear from experts in the open source communityHear from experts in the open source communityHear from experts in the open source communityHear from experts in the open source communityHear from experts in the open source communityHear from experts in the open source communityHear from experts in the open source community",
      date: "October 31, 2024",
      time: "10:00:00"
    }
  ];
  return (
    <div className="container bg-zinc-900 border border-gray-200 mx-auto rounded-sm px-4 py-8">
      <h2 className="text-[40px] text-green-400 font-bold text-center mb-8">Events</h2>
      <ul className="space-y-8 ">
        {events.map((event) => (
          <li key={event.id} className="bg-zinc-900  border-[2px] shadow  shadow-white/25 border-green-600 rounded-sm p-4">

            <h3 className="text-4xl text-green-400 hover-underline-animation font-bold">{event.title}</h3>
            <p className="text-md text-slate-300 text-right"> <b>{event.date}</b></p>
            <p className="text-md text-slate-300 text-right"> <b>{event.time}</b></p>
            <br></br>
            <p className="text-slate-300 text-lg	">{event.description}</p>
            <br/>
          
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
