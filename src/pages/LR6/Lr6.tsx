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
    IonItem,
    IonLabel,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import { Mechanism } from "./classes/Mechanism";
import { Node } from "./classes/Node";

const Lr6: React.FC = () => {
    const [resData, setResData] = useState<string>();
    const solve = ()=>{
        const test = new Node('Новий вузол', 35, 20, '213123123')
        test.showConsole();
        setResData(test.showReturn());
    }


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Завдання 1</IonTitle>
                </IonToolbar>
                <IonToolbar color="primary">
                    <IonButtons>
                        <IonMenuButton menu="first"></IonMenuButton>
                        <IonTitle>Лабораторні роботи</IonTitle>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>
                            Завдання 1 (Слободяник Єгор КН-32) Варінат 19
                        </IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <p>
                            Необхідно додати у розроблений в попередній
                            лабораторній роботі застосунок сторінку для обробки
                            JSON файлу отриманого з серверу.
                        </p>
                        <IonItem>
                            <IonLabel position="floating">Кількість елементів</IonLabel>
                        </IonItem>
                        <IonButton expand="block" onClick={solve}>
                            Розрахунок
                        </IonButton>
                        <IonItem> 
                            <p>Дані</p>
                        </IonItem>
                        <IonItem>
                            <p>{resData}</p>
                        </IonItem>
                    </IonCardContent>
                </IonCard>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large"></IonTitle>
                    </IonToolbar>
                </IonHeader>
            </IonContent>
        </IonPage>
    );
};

export default Lr6;
