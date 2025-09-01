![Kubernetes on GCP](https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/4093204/cover_image/regular_1708x683/2-27d4fb64981f85dbf876f123b1ce27b6.png)

# Using Kubernetes on GCP (GKE): My Experience Deploying a Microservices App

Deploying a microservices application is no small task, especially when you’re looking for scalability, flexibility, and ease of management.

For my most recent project, I decided to use Kubernetes on Google Cloud Platform (GKE) to handle orchestration.

Here’s how that went, what I learned, and what I’d do differently next time.

## Why I Chose GKE

Google Kubernetes Engine (GKE) is a managed Kubernetes service, meaning Google handles most of the heavy lifting.

Since Kubernetes was originally developed by Google, it made sense to use GKE to take advantage of its native integration and strong ecosystem support.

GKE automates cluster setup, upgrades, monitoring, and scaling — all of which made my life easier during deployment.

## The Architecture I Deployed

My app was broken into multiple microservices:

- Authentication Service  
- User Service  
- Notification Service  
- Frontend Web App  
- PostgreSQL for storage  

Each service ran in its own Docker container, and I used Kubernetes Deployments and Services to manage them.

## Setting Up the Cluster

Creating a Kubernetes cluster on GKE was surprisingly straightforward.

Using either the GCP console or `gcloud` CLI, I spun up a standard cluster in a few minutes.

I configured:

- Auto-scaling  
- Regional availability  
- Network policies for isolation  
- Node pools with separate machine types for frontend and backend workloads  

## CI/CD Integration

I integrated my GitHub repo with Cloud Build and configured triggers so that every push to the main branch built Docker images and deployed to the cluster using `kubectl`.

Having CI/CD wired up helped catch bugs early and allowed for faster, safer rollouts.

## Managing Secrets and Configs

I used Kubernetes Secrets and ConfigMaps for storing environment variables and API keys.

To improve security, I integrated Secret Manager and limited access to only the services that needed them.

## Monitoring and Logging

Stackdriver (now called Cloud Operations) made it easy to monitor pod health, CPU/memory usage, and logs across services.

I also set up custom alerts for error spikes and crash loops, which helped me react to issues quickly in production.

## Lessons I Learned

- **Start small:** I initially over-complicated the setup. Keeping the architecture simple at the start makes troubleshooting easier.

- **Use Helm or Kustomize:** Managing Kubernetes manifests manually becomes painful. I later migrated to Helm charts for more manageable and reusable configurations.

- **Resource limits matter:** Misconfigured CPU/memory limits led to a few OOM kills and degraded performance.

- **Rolling updates are your friend:** Kubernetes made rolling updates smooth, but I learned to always add health checks to prevent bad deployments from taking down the app.

## Would I Use GKE Again?

Yes — especially for complex, multi-service applications that need to scale.

GKE saved me a ton of time on operational overhead and gave me the flexibility of Kubernetes without the pain of managing it myself.

It’s not the cheapest solution, but the time and reliability trade-off were worth it for my use case.
