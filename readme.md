[![Netlify Status](https://api.netlify.com/api/v1/badges/3cdb8586-6c66-4cb8-988f-f572916ee2d4/deploy-status)](https://app.netlify.com/projects/imaginative-pudding-c1f421/deploys)

# link-shortener

An easy way to create short links.

For all questions, comments, or concerns, reach out to [Davey Adams \<davey.adams.three@gmail.com\>](https://github.com/humandavey).

## Code

link-shortener is written in TypeScript.
The frontend uses ReactJS.
Firestore is used as the database.

### Client

The code is at root level in `./src`.

To run the development version of the frontent, use `npm run dev`.

To build the production frontend, use `npm run build`.

## Configuration

Add a `.env` file in the root directory with the following API keys.

```
FB_API_KEY=???
FB_AUTH_DOMAIN=???
FB_PROJECT_ID=???
FB_STORAGE_BUCKET=???
FB_MESSAGING_SENDER_ID=???
FB_APP_ID=???
FB_MEASUREMENT_ID=???
```
