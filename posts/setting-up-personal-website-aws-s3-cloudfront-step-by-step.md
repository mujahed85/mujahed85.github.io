![AWS S3 CloudFront](https://blog.blazingcdn.com/hs-fs/hubfs/1_5TVAJ16HJoWKrCqVtPk5GA.png?width=1000&height=420&name=1_5TVAJ16HJoWKrCqVtPk5GA.png)

# Setting Up a Personal Website on AWS S3 + CloudFront (Step-by-Step)

Creating a personal website is an excellent way to showcase your work, ideas, or portfolio. 

Hosting a static website on AWS using S3 and CloudFront is a powerful, scalable, and cost-effective solution.

This step-by-step guide will walk you through the process of setting up your website on AWS.

## Step 1: Create an S3 Bucket

First, log into the AWS Management Console and go to the S3 service.

Create a new bucket with a name matching your website domain, for example, `yourdomain.com`.

Select the region closest to your target users to reduce latency.

Make sure to disable “Block all public access” so that your website files are accessible publicly.

## Step 2: Upload Your Website Files

Upload your website’s static files—HTML, CSS, JavaScript, images—into the bucket.

Your main page should be named `index.html` and placed at the root level of the bucket.

## Step 3: Enable Static Website Hosting

Go to your bucket’s properties and enable “Static website hosting.”

Set the index document to `index.html`.

You can optionally set an error document such as `error.html`.

Take note of the endpoint URL that AWS provides; this is your site’s S3-hosted URL.

## Step 4: Make Your Bucket Public

To allow public access to your website files, set a bucket policy.

The policy must grant read permissions to everyone.

Here is a sample policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::yourdomain.com/*"
    }
  ]
}
