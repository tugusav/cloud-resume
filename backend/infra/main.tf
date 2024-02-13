provider "aws" {
  region = var.aws_region
}

data "aws_caller_identity" "current" {}

data "aws_region" "current" {}

data "archive_file" "lambda_get_views" {
  type = "zip"

  source_dir  = "${path.root}/lambda/get_views"
  output_path = "${path.root}/lambda/get_views.zip"
}

data "archive_file" "lambda_update_views" {
  type        = "zip"
  source_dir  = "${path.root}/lambda/update_views"
  output_path = "${path.root}/lambda/update_views.zip"
}


resource "aws_s3_bucket" "lambda_bucket" {
  bucket = "resume-lambda-functions-bkt"
}

resource "aws_s3_bucket_ownership_controls" "lambda_bucket" {
  bucket = aws_s3_bucket.lambda_bucket.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_acl" "lambda_bucket" {
  depends_on = [aws_s3_bucket_ownership_controls.lambda_bucket]

  bucket = aws_s3_bucket.lambda_bucket.id
  acl    = "private"
}

resource "aws_s3_object" "lambda_get_views" {
  bucket = aws_s3_bucket.lambda_bucket.id

  key    = "get_views.zip"
  source = data.archive_file.lambda_get_views.output_path

  etag = filemd5(data.archive_file.lambda_get_views.output_path)
}

resource "aws_s3_object" "lambda_update_views" {
  bucket = aws_s3_bucket.lambda_bucket.id

  key    = "update_views.zip"
  source = data.archive_file.lambda_update_views.output_path

  etag = filemd5(data.archive_file.lambda_update_views.output_path)
}

resource "aws_dynamodb_table" "page_views_table" {
  name           = "cloud-resume-page-views"
  billing_mode   = "PROVISIONED"
  read_capacity  = 20
  write_capacity = 20
  hash_key       = "stats"

  attribute {
    name = "stats"
    type = "S"
  }
}

resource "aws_dynamodb_table_item" "view_count_item" {
  table_name = aws_dynamodb_table.page_views_table.name
  hash_key   = aws_dynamodb_table.page_views_table.hash_key

  item = <<ITEM
{
  "stats": {"S": "page-views"},
  "qty": {"N": "0"}
}
ITEM
}



resource "aws_lambda_function" "get_views_lambda" {
  function_name = "get_views_lambda_function"
  s3_bucket     = aws_s3_bucket.lambda_bucket.id
  s3_key        = aws_s3_object.lambda_get_views.key

  runtime = "python3.12"
  handler = "get_lambda_function.lambda_handler"
  role    = aws_iam_role.lambda_role_get.arn

}

resource "aws_lambda_function" "update_views_lambda" {
  function_name = "update_views_lambda_function"
  s3_bucket     = aws_s3_bucket.lambda_bucket.id
  s3_key        = aws_s3_object.lambda_update_views.key

  runtime = "python3.12"
  handler = "update_lambda_function.lambda_handler"
  role    = aws_iam_role.lambda_role_update.arn
}


resource "aws_iam_role" "lambda_role_get" {
  name               = "get_resume_views_lambda_role"
  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": ["lambda.amazonaws.com"]
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

resource "aws_iam_role" "lambda_role_update" {
  name               = "update_resume_views_lambda_role"
  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": ["lambda.amazonaws.com"]
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

resource "aws_iam_policy" "lambda_basic_execution_role_get" {
  name = "lambda_basic_execution_role_get"
  policy = jsonencode(
    {
      "Version" : "2012-10-17",
      "Statement" : [
        {
          "Effect" : "Allow",
          "Action" : "logs:CreateLogGroup",
          "Resource" : "arn:aws:logs:${data.aws_region.current.name}:${data.aws_caller_identity.current.account_id}:*"
        },
        {
          "Effect" : "Allow",
          "Action" : [
            "logs:CreateLogStream",
            "logs:PutLogEvents"
          ],
          "Resource" : [
            "arn:aws:logs:${data.aws_region.current.name}:${data.aws_caller_identity.current.account_id}:log-group:/aws/lambda/${aws_lambda_function.get_views_lambda.function_name}:*"
          ]
        }
      ]
    }
  )
}

resource "aws_iam_policy" "lambda_basic_execution_role_update" {
  name = "lambda_basic_execution_role_update"
  policy = jsonencode(
    {
      "Version" : "2012-10-17",
      "Statement" : [
        {
          "Effect" : "Allow",
          "Action" : "logs:CreateLogGroup",
          "Resource" : "arn:aws:logs:${data.aws_region.current.name}:${data.aws_caller_identity.current.account_id}:*"
        },
        {
          "Effect" : "Allow",
          "Action" : [
            "logs:CreateLogStream",
            "logs:PutLogEvents"
          ],
          "Resource" : [
            "arn:aws:logs:a${data.aws_region.current.name}:${data.aws_caller_identity.current.account_id}:log-group:/aws/lambda/${aws_lambda_function.update_views_lambda.function_name}:*"
          ]
        }
      ]
  })
}

resource "aws_iam_policy" "lambda_microservice_execution_role" {
  name = "lambda_microservice_execution_role"
  policy = jsonencode(
    {
      "Version" : "2012-10-17",
      "Statement" : [
        {
          "Effect" : "Allow",
          "Action" : [
            "dynamodb:DeleteItem",
            "dynamodb:GetItem",
            "dynamodb:PutItem",
            "dynamodb:Scan",
            "dynamodb:UpdateItem"
          ],
          "Resource" : "arn:aws:dynamodb:${data.aws_region.current.name}:${data.aws_caller_identity.current.account_id}:table/${aws_dynamodb_table.page_views_table.name}"
        }
      ]
  })
}
resource "aws_iam_policy" "lambda_dynamodb_execution_role_get" {
  name = "lambda_dynamodb_execution_role_get"
  policy = jsonencode(
    {
      "Version" : "2012-10-17",
      "Statement" : [
        {
          "Effect" : "Allow",
          "Action" : [
            "dynamodb:GetItem",
          ],
          "Resource" : "arn:aws:dynamodb:${data.aws_region.current.name}:${data.aws_caller_identity.current.account_id}:table/${aws_dynamodb_table.page_views_table.name}"
        }
      ]
  })
}

resource "aws_iam_role_policy_attachment" "lambda_basic_execution_role_get" {
  role       = aws_iam_role.lambda_role_get.name
  policy_arn = aws_iam_policy.lambda_basic_execution_role_get.arn
}
resource "aws_iam_role_policy_attachment" "lambda_dynamodb_role_get" {
  role       = aws_iam_role.lambda_role_get.name
  policy_arn = aws_iam_policy.lambda_dynamodb_execution_role_get.arn
}

resource "aws_iam_role_policy_attachment" "lambda_basic_execution_role_update" {
  role       = aws_iam_role.lambda_role_update.name
  policy_arn = aws_iam_policy.lambda_basic_execution_role_update.arn
}

resource "aws_iam_role_policy_attachment" "lambda_microservice_execution_role" {
  role       = aws_iam_role.lambda_role_update.name
  policy_arn = aws_iam_policy.lambda_microservice_execution_role.arn
}

