export default function PorHealthPage() {
  return (
    <div className="container">
      <h1>🌿 PorHealth Dashboard</h1>
      
      <div className="card">
        <h2>Welcome to PorHealth</h2>
        <p>Your AI-powered health optimization platform is ready!</p>
      </div>
      
      <div className="grid">
        <div className="card">
          <h3>📊 Nutrition</h3>
          <p>AI-powered meal planning and nutrition optimization</p>
          <button className="btn">Start Planning</button>
        </div>
        
        <div className="card">
          <h3>💪 Fitness</h3>
          <p>Personalized workout routines and tracking</p>
          <button className="btn">Start Workout</button>
        </div>
        
        <div className="card">
          <h3>🔬 Biometrics</h3>
          <p>Health metrics tracking and analysis</p>
          <button className="btn">View Stats</button>
        </div>
      </div>
      
      <div className="card">
        <h3>🤖 AI Health Coach</h3>
        <p>Chat with your personal AI health assistant</p>
        <textarea placeholder="Ask your AI health coach anything..." rows="3" style="width: 100%; padding: 10px; margin: 10px 0;"></textarea>
        <button className="btn">Send Message</button>
      </div>
    </div>
  )
}
