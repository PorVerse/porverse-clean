export default function HomePage() {
  return (
    <div className="container">
      <h1>🌟 PorVerse Platform</h1>
      <p>Welcome to the AI Spiritual Operating System</p>
      
      <div className="grid">
        <div className="card">
          <h3>🌿 PorHealth</h3>
          <p>AI-powered health optimization</p>
          <a href="/dashboard/por-health" className="btn">Enter Dashboard</a>
        </div>
        
        <div className="card">
          <h3>👶 PorKids</h3>
          <p>Conscious education for children</p>
          <button className="btn">Coming Soon</button>
        </div>
        
        <div className="card">
          <h3>🧠 PorMind</h3>
          <p>Financial education AI</p>
          <button className="btn">Coming Soon</button>
        </div>
        
        <div className="card">
          <h3>🌻 PorWell</h3>
          <p>Mental wellness AI</p>
          <button className="btn">Coming Soon</button>
        </div>
        
        <div className="card">
          <h3>🌊 PorFlow</h3>
          <p>Maximum productivity</p>
          <button className="btn">Coming Soon</button>
        </div>
        
        <div className="card">
          <h3>💧 PorBlu</h3>
          <p>Strategic life planning</p>
          <button className="btn">Coming Soon</button>
        </div>
      </div>
    </div>
  )
}
