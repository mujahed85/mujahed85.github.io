# Infrastructure as Code: Why Manual Setup Is a Thing of the Past

![Infrastructure as Code](https://blog.gitguardian.com/content/images/2022/01/22W02-Blog-Banner-Introduction-IaC.png)

Setting up infrastructure manually used to be the norm. You’d log into a server, configure dependencies, tweak settings, and maybe document it if you had time. But as environments grew more complex and teams adopted cloud platforms, that approach quickly broke down. Today, we treat infrastructure like software—and that’s exactly what **Infrastructure as Code (IaC)** is all about.

---

### **What is Infrastructure as Code (IaC)?**

Infrastructure as Code is the practice of provisioning and managing infrastructure through machine-readable configuration files instead of manual processes. With IaC, you define what your infrastructure should look like using code — and the cloud provider makes it real.

Whether you’re spinning up VMs, configuring load balancers, managing DNS records, or setting up S3 buckets, everything is described in code and version-controlled.

---

### **Why IaC Matters**

1. **Consistency**
   - No more “it works on my machine” scenarios. With IaC, your environments are reproducible across dev, staging, and production.

2. **Speed**
   - Provisioning infrastructure manually can take hours. With tools like Terraform or AWS CloudFormation, entire environments can be spun up in minutes.

3. **Version Control**
   - IaC lives in Git. You can track who changed what and when, roll back easily, and even review infrastructure changes via pull requests.

4. **Automation**
   - IaC fits perfectly into CI/CD workflows. You can deploy infrastructure changes automatically as part of your pipeline.

5. **Collaboration**
   - IaC encourages clear documentation. Other engineers can read and understand your infrastructure just like they would code.

---

### **Popular IaC Tools**

- **Terraform**
  - Cloud-agnostic and one of the most widely adopted IaC tools. Defines infrastructure using HCL (HashiCorp Configuration Language).
- **AWS CloudFormation**
  - Native to AWS. Allows you to define AWS resources using JSON or YAML.
- **Pulumi**
  - Lets you write infrastructure in languages like TypeScript, Python, Go, or .NET.
- **Ansible**
  - Often used for configuration management and provisioning, especially in hybrid or on-prem environments.

---

### **Example: A Simple Terraform Setup**

```hcl
provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"

  tags = {
    Name = "MyWebServer"
  }
}
