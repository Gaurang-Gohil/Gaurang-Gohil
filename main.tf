resource "aws_s3_bucket" "demo" {
  bucket = "automated-demo-bucket-ronie-123"
  tags = {
    Name        = "demo-bucket"
    Environment = "dev"
    Owner       = "ronie"
  }
}

output "s3_bucket_name" {
  value       = aws_s3_bucket.demo.id
  description = "The name (id) of the created S3 bucket"
}

output "s3_bucket_arn" {
  value       = aws_s3_bucket.demo.arn
  description = "The ARN of the created S3 bucket"
}


