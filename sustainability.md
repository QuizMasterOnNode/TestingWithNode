# Set up MongoDB Database
The project code is currently set up with a private MongoDB account. 
You will need to set up a new account for the team and change the uri credentials on line 10 of index.js.

# Set up Firebase Authentication
QuizMaster is using a private firebase account for firebase authentication and deployment. For authentication, 
the configuration object for firebase authentication must be changed for lines 11-18 of authentication.js. 
This includes the new apiKey, authDomain, projectId, storage bucket, messaginSenderId, and appId.

# Set up Firebase Deployment
Deployment must be node deployment and not a static deployment. Youtube tutorial used for this portion: https://www.youtube.com/watch?v=AgyO1a0FnWA&ab_channel=khabanh. 
