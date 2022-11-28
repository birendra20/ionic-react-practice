import React from "react";
import { IonButton, useIonAlert } from "@ionic/react";

function Alert() {
  const [presentAlert] = useIonAlert();

  return (
    <>
      <Example1 />
    </>
  );
}
export default Alert;

function Example1() {
  const [presentAlert] = useIonAlert();

  return (
    <>
      <h1>
        An Alert is a dialog that presents users with information or collects
        information from the user using inputs. An alert appears on top of the
        app's content, and must be manually dismissed by the user before they
        can resume interaction with the app. It can also optionally have a
        header, subHeader and message.
      </h1>
      <IonButton
        onClick={() =>
          presentAlert({
            header: "Alert",
            subHeader: "Important message",
            message: "This is an alert!",
            buttons: ["OK"],
          })
        }
      >
        Click Me
      </IonButton>
    </>
  );
}
