// import React from "react";
// ///makereact know this is a class base component now react starting traking it


const About = () => {
  return (
    <div className="min-h-screen bg-[#f3e9dc] font-serif px-6 py-16 flex justify-center items-center">
      <div className="max-w-3xl w-full bg-[#fffdf5] border-[3px] border-[#e6d3b3] shadow-[0_0_30px_rgba(0,0,0,0.1)] rounded-xl p-10 relative overflow-hidden">
        
        {/* Antique Decoration */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#c7a17a] to-[#fffdf5]" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#fffdf5] to-[#c7a17a]" />
        
        {/* Header */}
        <h1 className="text-4xl text-[#5a4e3c] font-bold tracking-wide mb-4">Hetvi Barot</h1>
        <p className="text-[#7a6a55] italic text-sm mb-6">“Coding is my craft, and the browser is my canvas.”</p>

        {/* Main Bio */}
        <p className="text-[#3d372f] text-lg leading-relaxed mb-6">
          Greetings. I am a passionate React Developer based in Ahmedabad, India. My journey started with curiosity,
          evolved with persistence, and now flows through every line of code I write. With a special love for the MERN stack,
          I weave interfaces with React, route logic with Express, and sculpt data with MongoDB — all tied together with
          clean, modular architecture.
        </p>

        {/* Skills Block */}
        <div className="bg-[#f9f3e8] p-4 rounded-lg border border-[#e2cdb0] mb-6">
          <h2 className="text-xl font-semibold text-[#4e402f] mb-2">Technologies I Love:</h2>
          <ul className="list-disc list-inside text-[#3a332b] space-y-1">
            <li>React + TailwindCSS for elegant frontends</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>DESIGN</li>
          </ul>
        </div>

        {/* Contact Footer */}
        <div className="text-sm text-[#5c5140] space-y-1">
          <p>📧 bhetvi123@gmail.com</p>
          <p>📍 Ahmedabad, India</p>
          <p>🌐 www.vrajeshdev.com</p>
        </div>
      </div>
    </div>
  );
};

export default About;

// class Userclass extends React.Component{//its a class which is there inside a react package
//     constructor(props){
//         super(props);
//          this.state={
//             count: 0,
//            userInfo: {
//             title:"bazar",
//            },
//           };
//         console.log("child conster");//learn for componentDidMount
//     }
//     async componentDidMount(){
//         const data = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const json = await data.json();
//           this.setState({
//                   userInfo: json[0],
//             });
//         console.log(json);//learn for componentDidMount

//         console.log("child componentdidmount");//learn for componentDidMount
//     }
//     render(){//its a rendormethod which return some pice of jsx
//          console.log("child render");//learn for componentDidMount
//         const {name}=this.props;
//     return (
//     <div className="usercard">
//         <h2>name:{name}</h2>
//         <h2>count: {this.state.count}</h2>
//         <h2>title: {this.state.userInfo.title}</h2>
//         <button onClick={()=>{
//             this.setState({
//                 count: this.state.count + 1,
//             });
//             }}>count increse</button>
//         <h3>location:india</h3>
//         <h4>contact:@hetvi</h4>
//     </div>
//     );
// }
// }

// export default Userclass;

