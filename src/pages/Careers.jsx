import { useState } from 'react';
import { Briefcase, MapPin, Clock, ArrowRight, Upload } from 'lucide-react';
import './Careers.css';

export default function Careers() {
  const [expandedId, setExpandedId] = useState(null);

  const jobs = [
    {
      id: 1,
      title: "Senior Full Stack Engineer",
      location: "San Francisco, CA (Hybrid)",
      type: "Full-Time",
      department: "Engineering",
      desc: "Join our core platform team to build highly scalable microservices architecture and exceptional React frontends. You will be instrumental in making architectural decisions and mentoring junior engineers.",
      reqs: ["5+ years of React and Node.js experience", "Strong system design skills", "Mentorship experience"]
    },
    {
      id: 2,
      title: "Cloud Infrastructure Specialist",
      location: "Remote (Global)",
      type: "Full-Time",
      department: "DevOps",
      desc: "We are looking for a cloud visionary to optimize our AWS/Azure deployments. Focus on zero-downtime CI/CD pipelines, Terraform, and K8s orchestration.",
      reqs: ["Deep AWS/Azure expertise", "Terraform & Kubernetes wizard", "Observability tools experience"]
    },
    {
      id: 3,
      title: "UI/UX Product Designer",
      location: "New York, NY (Hybrid)",
      type: "Full-Time",
      department: "Design",
      desc: "Shape the visual language of our client-facing products. We need someone who obsesses over 1px details, subtle animations, and smooth user journeys.",
      reqs: ["A stunning portfolio of SaaS products", "Figma mastery", "Basic CSS/HTML knowledge is a plus"]
    }
  ];

  return (
    <div className="page-wrapper pt-32">
      <div className="container page-header center animate-fade-up">
        <div className="hero-badge">Join the Team</div>
        <h1 className="page-title text-gradient">Build the Future With Us</h1>
        <p className="page-desc">
          We are always looking for exceptional talent. If you love solving incredibly hard problems with elegant solutions, you belong here.
        </p>
      </div>

      <div className="container pb-24">
        <div className="jobs-container">
          <div className="jobs-list">
            {jobs.map((job, idx) => (
              <div key={job.id} className={`job-card glass animate-fade-up ${expandedId === job.id ? 'expanded' : ''}`} style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="job-header" onClick={() => setExpandedId(expandedId === job.id ? null : job.id)}>
                  <div>
                    <h3 className="job-title">{job.title}</h3>
                    <div className="job-meta">
                      <span><Briefcase size={14}/> {job.department}</span>
                      <span><MapPin size={14}/> {job.location}</span>
                      <span><Clock size={14}/> {job.type}</span>
                    </div>
                  </div>
                  <button className="expand-btn">
                    {expandedId === job.id ? 'Close' : 'View Details'} <ArrowRight size={16} className={`arrow-icon ${expandedId === job.id ? 'rotated' : ''}`} />
                  </button>
                </div>
                
                {expandedId === job.id && (
                  <div className="job-details">
                    <p>{job.desc}</p>
                    <h4>Requirements</h4>
                    <ul>
                      {job.reqs.map((req, i) => <li key={i}>{req}</li>)}
                    </ul>
                    
                    <div className="application-form">
                      <h4>Apply for this position</h4>
                      <form>
                         <div className="form-row">
                           <input type="text" placeholder="Full Name" required />
                           <input type="email" placeholder="Email Address" required />
                         </div>
                         <div className="form-row">
                           <input type="url" placeholder="LinkedIn or Portfolio URL" />
                         </div>
                         <div className="file-upload-wrapper">
                            <input type="file" id={`resume-${job.id}`} className="file-input" hidden />
                            <label htmlFor={`resume-${job.id}`} className="file-label">
                              <Upload size={20} className="mr-2" />
                              <span>Upload Resume/CV (PDF)</span>
                            </label>
                         </div>
                         <button type="button" className="btn btn-primary mt-4 w-full">Submit Application</button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
