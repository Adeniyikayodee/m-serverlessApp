
In the project directory, you can run:

### `npm start`


Create Free Tier Account on Amazon S3 and a bucket, uncheck public,
Google Amazon static website policy S3, copy default code, go back to the AWS plaftorm, 
Check folder and click on propeties to edit static website hosting, click on the first icon, then add index.html indo the "index document" box, then save.

Go to Permissions, click on Bucket Policy and paste the AWS static website policy code. Edit the resource to invoiceprocessing-aws/. Edit action to * while you serve the website.

On your local machine, create a build file in your app folder by runing npm run build in terminal

retun to AWS IAM user and create a user, and configure AWS CLI to access keys, return to terminal on your local machine and push to AWS bucket. Load webpage and edit Action on bucket policy to GetObject.

Go to Amazon API Gateway...