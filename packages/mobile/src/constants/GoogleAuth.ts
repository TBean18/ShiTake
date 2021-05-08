import * as Google from "expo-google-app-auth";
import firebase from "firebase";

const config = {
  //   expoClientId: `<YOUR_WEB_CLIENT_ID>`,
  iosClientId: `757074288438-48qjkorpr49suvanebagt102aus3q3fv.apps.googleusercontent.com`,
  androidClientId: `757074288438-s5mlaabkcj1o4a86t0pg2n6rd9q6cdtp.apps.googleusercontent.com`,
  //   iosStandaloneAppClientId: `<YOUR_IOS_CLIENT_ID>`,
  //   androidStandaloneAppClientId: `<YOUR_ANDROID_CLIENT_ID>`,
};

async function signInWithGoogleAsync() {
  try {
    const result = await Google.logInAsync(config);

    //Login Success
    if (result.type === "success" && result.accessToken) {
      const { user, accessToken } = result;
      console.log(user);

      //Make the Firebase Credntial with the supplied token
      const credential = firebase.auth.GoogleAuthProvider.credential(
        null,
        accessToken
      );

      //Sign in witht he credential
      firebase
        .auth()
        .signInWithCredential(credential)
        .catch((err) => {
          throw err;
        });
      return accessToken;
    } else {
      return { cancelled: true };
    }
  } catch (e) {
    console.log(e);
    return { error: true };
  }
}

export { signInWithGoogleAsync };
