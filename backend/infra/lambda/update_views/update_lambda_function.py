import json
import boto3


client = boto3.client('dynamodb')

def lambda_handler(event, context):
    
    response = client.update_item(
        TableName='cloud-resume-page-views',
        Key={
            'stats': {'S': 'view-count'}
            
        },
        UpdateExpression= 'ADD qty :inc',
        ExpressionAttributeValues= {":inc": {"N": "1"}},
        ReturnValues= 'UPDATED_NEW'
        )
        
    value = response['Attributes']['qty']['N']
    return {
        'statusCode': 200,
        'body': value
    }
