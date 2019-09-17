# class27-deployment

## Steps for deploying on s3


### Create your build

Once your app is ready to deploy run the build script:

```bash
$npm run build
```

This will create a build directory in your project folder.

### 1. Create an s3 bucket

Log into your AWS console and create a new bucket

- Follow the on screen prompts.
- **Be sure to uncheck the block permissions option.**

### 2. Configure to static website hosting

Click on `properties` and select `Static website hosting`

- input the index and error document
- Check `use this bucket to host a website`

### 3. Add a bucket Policy

Go to permission and add a bucket policy yaml or json file.

- Select `permissions` and click on `Bucket Policy`.
- Paste the following code into the editor to let client browsers view your app:
  ```json
  {
      "Version": "2012-10-17",
      "Statement": [
          {
              "Sid": "AddPerm",
              "Effect": "Allow",
              "Principal": "*",
              "Action": "s3:GetObject",
              "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*"
          }
      ]
  }
  ```

### 4. View your website in the browser!

You can find a url under `properties > Static webstite hosting`
