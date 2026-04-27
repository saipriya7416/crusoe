import { Cloud, Code, Layout, Database, Globe, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

export default function Services() {
  const services = [
    { 
      id: "cloud",
      title: "Cloud Architecture", 
      desc: "Scalable AWS and Azure infrastructure designed for high availability, ultimate security, and cost efficiency. We architect zero-downtime systems.", 
      icon: <Cloud size={48} />,
      features: ["Serverless Computing", "Docker & Kubernetes", "Multi-region Deployments"]
    },
    { 
      id: "dev",
      title: "Custom Development", 
      desc: "Tailored software solutions built with modern stacks. We craft high-performance backends and interactive frontends that scale to millions.", 
      icon: <Code size={48} />,
      features: ["React / Next.js", "Node & Go Backends", "API Development"]
    },
    { 
      id: "uiux",
      title: "UI/UX Design", 
      desc: "Premium, highly functional interfaces optimizing user experience and retention. Minimalist, modern aesthetics matching enterprise standards.", 
      icon: <Layout size={48} />,
      features: ["Wireframing & Prototyping", "Design Systems", "Usability Testing"]
    },
    { 
      id: "data",
      title: "Data Engineering", 
      desc: "Intelligent pipelines, AI integrations, and big data management. Unlock the true value of your data with our robust analytical foundations.", 
      icon: <Database size={48} />,
      features: ["Data Warehousing", "Machine Learning", "Real-time Analytics"]
    },
    { 
      id: "global",
      title: "Global Systems", 
      desc: "Distributed international applications requiring high-performance latency. Edge networking guarantees lightning fast load times everywhere.", 
      icon: <Globe size={48} />,
      features: ["Edge Computing", "CDN Integration", "Localization"]
    },
    { 
      id: "hardware",
      title: "Hardware Integration", 
      desc: "IoT software stacks and embedded systems processing real-time telemetry. Bridging the physical world with the digital realm seamlessly.", 
      icon: <Cpu size={48} />,
      features: ["IoT Protocols", "Firmware Interfacing", "Edge AI"]
    }
  ];

  return (
    <div className="page-wrapper pt-32">
      <div className="container page-header center animate-fade-up">
        <h1 className="page-title text-gradient">Our Services</h1>
        <p className="page-desc">
          Comprehensive, end-to-end engineering solutions for companies pushing the edge of what's possible.
        </p>
      </div>

      <div className="container pb-24">
        <div className="detailed-services-grid">
          {services.map((service, index) => (
            <div key={index} className="detailed-service-card glass animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="service-icon-3d">
                {service.icon}
                <div className="icon-glow"></div>
              </div>
              <h3 className="card-title">{service.title}</h3>
              <p className="card-desc">{service.desc}</p>
              
              <ul className="service-features-list">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              
              <Link to="/contact" className="action-link mt-auto">
                Discuss Project <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      
      <div className="container pb-32">
        <div className="glass call-out-box animate-fade-up delay-300">
          <h2>Need a custom solution outside our standard offerings?</h2>
          <Link to="/contact" className="btn btn-primary mt-4">Speak with an Architect</Link>
        </div>
      </div>
    </div>
  );
}
