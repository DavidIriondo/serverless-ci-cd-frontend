## 🌐 Frontend Repository (Preact)

Frontend Application for Serverless CI/CD Demo (Preact + ECS Fargate)

This repository contains the frontend application built with Preact and deployed as a containerized service on Amazon ECS (Fargate). The application communicates with a [FastAPI backend](https://github.com/DavidIriondo/serverless-ci-cd-backend) through an Application Load Balancer.

The project includes a GitHub Actions workflow that builds the Docker image, pushes it to Amazon ECR, and deploys it automatically to ECS on every push to the main branch.

This frontend is part of a complete serverless CI/CD example described in this Medium post:

[Building a Serverless CI/CD Pipeline on AWS with Github Actions and Terraform](https://medium.com/@davidiriondopalacios/building-a-serverless-ci-cd-pipeline-on-aws-with-github-actions-and-terraform-dae596f1d2e0)


## 🐋 Docker

Build docker image

```
docker build -t serverless-ci-cd/frontend:v1 . 
```

Run docker image 

```
docker run --rm -p 80:80 -e BASE_URL=localhost:8000 serverless-ci-cd/frontend:v1
```

BASE_URL is a mandatory variable, default value is local localhost:8000. This value is backend base URL

When deployed in ECS this value is automatically generated