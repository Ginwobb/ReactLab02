function App(){
    const stBg={backgroundColor :'#23272F',width:'1200px',height:'550px',color:'white',padding:'50px',borderRadius:'40px',margin:'0 auto',fontFamily:'sans-serif'}
    const stCt={backgroundColor:'#343A46',width:'1100px',height:'320px',padding:'20px',borderRadius:'20px',margin:'0 auto'}
    const stList ={lineHeight:'2em',padding:'0 50px'}
    const stH3={fontSize:'25px',padding:'0 50px'}
    return(
        <div style={stBg}>
           <h1 style={{fontSize:'50px',margin:'0px'}}>Quick Start</h1>
           <p style={{lineHeight:'2em',fontSize:'17px'}}>Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.</p>
           <br></br>
        <section style ={stCt}>
            <h3 style={stH3}>You will learn</h3>
            <ul style={stList}>
                <li>How to create and nest components</li>
                <li>How to add markup and styles</li>
                <li>How to display data</li>
                <li>How to render conditions and lists</li>
                <li>How to respond to events and update the screen</li>
                <li>How to share data between components</li>
               
            </ul>
        </section>
        </div>
    )
}
ReactDOM.createRoot(document.querySelector('#root'))
.render(<App/>)
