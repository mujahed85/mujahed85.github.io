![CI/CD Pipeline](https://www.lambdatest.com/blog/wp-content/uploads/2024/06/unnamed-12-1.png)

# CI/CD Pipeline for Cloud Deployments using GitHub Actions and AWS

Continuous Integration and Continuous Deployment (CI/CD) is a cornerstone of modern DevOps workflows. 

Automating build, test, and deployment pipelines allows teams to deliver features faster, with fewer bugs and more confidence.

In this post, I’ll walk you through how I built a CI/CD pipeline for my cloud-based application using GitHub Actions and AWS.

## Why CI/CD Matters

Before setting up CI/CD, deploying to the cloud was a manual process for me — error-prone, time-consuming, and inconsistent.

CI/CD brought automation, standardization, and speed to my development cycle.

Every code push now triggers automated tests and, if successful, a deployment to AWS.

## Why I Chose GitHub Actions

Since my codebase lives on GitHub, GitHub Actions was the natural choice for automation.

It’s tightly integrated, easy to configure, and supports a wide range of workflows.

With just a `.yml` file in the repository, I could define the steps to build, test, and deploy.

## AWS for Deployment

My cloud infrastructure is hosted on AWS — mostly using services like EC2, S3, and ECS.

So, I used GitHub Actions to trigger deployment steps that interact with AWS using the AWS CLI and credentials stored as GitHub secrets.

## Setting Up the Workflow File

Inside my project repo, I created a `.github/workflows/deploy.yml` file.

Here’s a simplified version of my workflow:

```yaml
name: Deploy to AWS

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v3

    - name: Set up Node.js (or Python, etc.)
      uses: actions/setup-node@v3
      with:
        node-version: '18'

    - name: Install dependencies
      run: npm install

    - name: Run tests
      run: npm test

    - name: Deploy to AWS
      env:
        AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
        AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        AWS_REGION: 'us-east-1'
      run: |
        aws s3 sync ./build s3://my-frontend-bucket
