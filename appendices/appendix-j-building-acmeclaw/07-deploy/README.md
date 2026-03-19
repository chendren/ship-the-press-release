# Step 7: Deploy

The built product was deployed to production:

- **Website**: S3 + CloudFront + ACM certificate
- **Pre-order API**: API Gateway + Lambda + DynamoDB
- **DNS**: GoDaddy → CloudFront
- **OpenClaw theme**: Applied to local installation
- **Source**: Pushed to github.com/chendren/AcmeClaw

Total AWS cost: ~$2/month.
