"use client";

const Cloud = () => {
  return (
    <>
      {/* ===== CLOUD COMPUTING SECTION ===== */}
      <h3 className="resume-title">
        <div className="icon-size">
          <img src="assets/img/icons/clouds.png" alt="Cloud Computing" />
        </div>
        <span style={{ color: "#1e90ff" }}>Cloud Computing</span>
      </h3>

      {/* ===== AZURE SECTION ===== */}
      <div className="resume-item">
        <h4>Microsoft Azure</h4>
        <ul>
          <li>
            <b>Design Architecture:</b> Build secure, scalable, and high-performance cloud solutions using Azure services such as Virtual Machines, App Services, and Azure Functions.
          </li>
          <li>
            <b>Technical Guidance:</b> Provide hands-on technical direction and cloud strategy using Azure best practices to align with business goals.
          </li>
          <li>
            <b>Cost Management:</b> Use Azure Cost Management and Advisor to optimize spending, track usage, and plan resource efficiency.
          </li>
          <li>
            <b>Security & Compliance:</b> Implement advanced security features using Azure Security Center, Key Vault, and Network Security Groups to ensure compliance with global standards.
          </li>
          <li>
            <b>Integration:</b> Integrate Azure services seamlessly with existing on-premise or hybrid infrastructure for smooth workflows.
          </li>
          <li>
            <b>Documentation:</b> Maintain clear and comprehensive architectural documentation, including deployment guides and topology diagrams.
          </li>
          <li>
            <b>High Availability:</b> Design fault-tolerant systems using Azure Load Balancer, Availability Zones, and Traffic Manager.
          </li>
        </ul>
      </div>

      {/* ===== GCP SECTION ===== */}
      <div className="resume-item">
        <h4>Google Cloud Platform (GCP)</h4>
        <ul>
          <li>
            <b>Design Architecture:</b> Develop robust, scalable, and secure cloud architectures leveraging GCP services such as Compute Engine, Cloud Run, and Cloud Storage.
          </li>
          <li>
            <b>Technical Leadership:</b> Offer expert advice and best practices on GCP architecture, workload management, and automation.
          </li>
          <li>
            <b>Cost Optimization:</b> Manage and reduce costs through resource right-sizing, committed use discounts, and monitoring with GCP Billing tools.
          </li>
          <li>
            <b>Security & Compliance:</b> Ensure security through IAM, VPC Service Controls, and encryption to maintain regulatory compliance.
          </li>
          <li>
            <b>Integration:</b> Enable seamless integration of GCP services with existing applications and hybrid environments.
          </li>
          <li>
            <b>Documentation:</b> Produce well-organized architecture diagrams, process flow documentation, and project reports.
          </li>
          <li>
            <b>High Availability:</b> Design resilient systems using GCP Cloud Load Balancing, Autoscaler, and Cloud DNS for consistent uptime.
          </li>
        </ul>
      </div>

      {/* ===== AWS SECTION ===== */}
      <div className="resume-item">
        <h4>Amazon Web Services (AWS)</h4>
        <ul>
          <li>
            <b>Design Architecture:</b> Design and deploy scalable, resilient, and secure solutions using AWS services like EC2, Lambda, and S3 that meet enterprise standards.
          </li>
          <li>
            <b>Technical Guidance:</b> Lead architectural discussions, provide AWS best practices, and guide development teams on cloud adoption.
          </li>
          <li>
            <b>Cost Management:</b> Optimize infrastructure costs using AWS Cost Explorer, Trusted Advisor, and Savings Plans.
          </li>
          <li>
            <b>Security & Compliance:</b> Implement AWS Identity and Access Management (IAM), data encryption, and compliance controls to protect sensitive information.
          </li>
          <li>
            <b>Integration:</b> Seamlessly integrate AWS solutions with hybrid or multi-cloud systems for improved agility and performance.
          </li>
          <li>
            <b>Documentation:</b> Prepare detailed AWS architectural blueprints, reports, and technical guides to ensure clarity and scalability.
          </li>
          <li>
            <b>High Availability:</b> Design reliable systems using Auto Scaling, Elastic Load Balancing (ELB), and Amazon Route 53.
          </li>
        </ul>
      </div>

      {/* ===== DEVOPS SECTION (UNCHANGED) ===== */}
      <div className="resume-item">
        <h4>DevOps</h4>
        <ul>
          <li>Clouds (AWS, Microsoft Azure & Google Cloud Platform)</li>
          <li>
            Operation (DevSysCloudOps, Baremetal, Virtualization, Cloud
            Serverless)
          </li>
          <li>
            Development (Full Stack Web using Django for enterprise-level
            applications — design & architecture)
          </li>
          <li>Version Control: GitHub, Bitbucket, GitLab</li>
          <li>Container Management: Docker, Kubernetes, Docker Swarm</li>
          <li>Application Monitoring: Prometheus, Dynatrace</li>
          <li>Deployment & Server Monitoring: Splunk, Datadog</li>
          <li>Configuration Management: Chef, Puppet, Ansible</li>
          <li>CI/CD Automation: Jenkins</li>
          <li>Test Automation: Selenium</li>
          <li>Artifact Management: CloudRepo</li>
          <li>Release Management: Octopus Deploy, Plutora, Chef</li>
          <li>Implement and manage CI/CD pipelines.</li>
          <li>Automate deployment processes and infrastructure provisioning.</li>
          <li>Monitor and troubleshoot system performance and reliability.</li>
          <li>
            Collaborate with development and operations teams for smooth
            deployment and integration.
          </li>
          <li>
            Maintain and manage infrastructure using Terraform, Ansible, or
            Puppet.
          </li>
          <li>Ensure security practices are built into the DevOps pipeline.</li>
        </ul>
      </div>
    </>
  );
};

export default Cloud;