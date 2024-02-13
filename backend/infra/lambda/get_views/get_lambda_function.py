import json
import boto3

    
client = boto3.client('dynamodb')
table_name = "view_count_item"

def lambda_handler(event, context):    
    data = client.get_item(
        TableName="cloud-resume-page-views",
        Key={
             'stats': {'S': 'view-count'}
        })
    
    views = data['Item']['qty']['N']
    print(data)
    
    return {
        'statusCode': 200,
        'body': views
    }
