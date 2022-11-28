import {
  AccordionGroupCustomEvent,
  IonAccordion,
  IonAccordionGroup,
  IonButton,
  IonItem,
  IonItemDivider,
  IonLabel,
} from "@ionic/react";
import { useRef } from "react";

const Accordian: React.FC = () => {
  return (
    <>
      <Example1 />

      <br />

      <Example2 />
      <br />
      <Example3 />
    </>
  );
};

export default Accordian;

function Example1() {
  return (
    <IonAccordionGroup>
      <IonAccordion value="first">
        <IonItem slot="header" color="light">
          <IonLabel>First Accordion</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          Accordions provide collapsible sections in your content to reduce
          vertical space while providing a way of organizing and grouping
          information.
          <b>
            All ion-accordion components should be grouped inside
            ion-accordion-group components.
          </b>
        </div>
      </IonAccordion>
      <IonAccordion value="second">
        <IonItem slot="header" color="light">
          <IonLabel>Second Accordion</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          Second Content
        </div>
      </IonAccordion>
    </IonAccordionGroup>
  );
}

function Example2() {
  const accordionGroup = useRef<null | HTMLIonAccordionGroupElement>(null);
  const toggleAccordion = () => {
    if (!accordionGroup.current) {
      return;
    }
    const nativeEl = accordionGroup.current;

    if (nativeEl.value === "second") {
      nativeEl.value = undefined;
    } else {
      nativeEl.value = "second";
    }
  };
  return (
    <>
      <IonAccordionGroup ref={accordionGroup}>
        <IonAccordion value="first">
          <IonItem slot="header" color="light">
            <IonLabel>First Accordion</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            First Content
          </div>
        </IonAccordion>
        <IonAccordion value="second">
          <IonItem slot="header" color="light">
            <IonLabel>Second Accordion</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            Second Content
          </div>
        </IonAccordion>
      </IonAccordionGroup>
      <IonButton onClick={toggleAccordion}>Toggle Second Accordion</IonButton>
    </>
  );
}
function Example3() {
  const listenerOut = useRef<null | HTMLParagraphElement>(null);
  const values = ["first", "second", "third", "forth"];
  const accordionGroupChange = (ev: AccordionGroupCustomEvent) => {
    const nativeEl = listenerOut.current;
    if (!nativeEl) {
      return;
    }

    const collapsedItems = values.filter((value) => value !== ev.detail.value);
    const selectedValue = ev.detail.value;

    nativeEl.innerText = `
        Expanded: ${selectedValue === undefined ? "None" : ev.detail.value}
        Collapsed: ${collapsedItems.join(", ")}
      `;
  };

  return (
    <>
      <IonAccordionGroup onIonChange={accordionGroupChange}>
        <IonAccordion value="first">
          <IonItem slot="header" color="light">
            <IonLabel>First Accordion</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            <h1>Listen for Accordion State Changes</h1>
          </div>
        </IonAccordion>
        <IonAccordion value="second">
          <IonItem slot="header" color="light">
            <IonLabel>Second Accordion</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            Developers can listen for the ionChange event to be notified when
            accordions expand or collapse.
          </div>
        </IonAccordion>
      </IonAccordionGroup>
      <p ref={listenerOut}></p>
    </>
  );
}
