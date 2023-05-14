import {
    InputCustomEvent,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonMenuButton,
    IonPage,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonTitle,
    IonToolbar,
} from "@ionic/react";

import Tab1 from "../../pages/Tab1";
import Tab2 from "../../pages/Tab2";
import Tab3 from "../../pages/Tab3";
import { useState } from "react";
import { Route } from "react-router";

interface iNumbers {
    number1: number;
    number2: number;
    number3: number;
}

const MainTabs: React.FC = () => {
    return (
        <IonTabs>
            <IonRouterOutlet>
                <Route path="/tabs/tab1" component={Tab1} exact />
                <Route path="/tabs/tab2" component={Tab3} exact />
                <Route path="/tabs/tab3" component={Tab3} exact />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
                <IonTabButton tab="tab1" href="/tabs/tab1">
                    <IonLabel>Tab 1</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab2" href="/tabs/tab2">
                    <IonLabel>Tab 2</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab3" href="/tabs/tab3">
                    <IonLabel>Tab 3</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    );
};

export default MainTabs;
