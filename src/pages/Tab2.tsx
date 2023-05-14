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
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import "./Tab2.css";
import { useState } from "react";

interface iNumbers {
    start: number;
    end: number;
}

const Tab2: React.FC = () => {
    const [numbers, setNumbers] = useState<iNumbers>({
        start: 0,
        end: 0,
    });
    const [resSum, setResSum] = useState<number>();

    const handleInput = (e: Event): void => {
        const inputEvent = e as InputCustomEvent;
        const { name, value } = inputEvent.target;
        setNumbers((prev) => ({ ...prev, [name]: value }));
    };

    const sumEvenNumbersWithRemainder2 = (): void => {
        let sum = 0;
        for (let i = +numbers.start; i <= +numbers.end; i++) {
            if (i % 6 === 2 && i % 2 === 0) {
                sum += i;
            }
        }
        console.log("sum = ", sum);

        setResSum((prev) => sum);
    };
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Завдання 2</IonTitle>
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
                            Завдання 2 (Слободяник Єгор КН-32) Варінат 19
                        </IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <p>
                            Знайдіть суму парних чисел, які при діленні на 6
                            дають остачу 2 на заданому проміжку чисел [a,b]
                        </p>
                        <IonItem>
                            <IonLabel position="floating">
                                Початок проміжку
                            </IonLabel>
                            <IonInput
                                type="number"
                                name="start"
                                onIonInput={handleInput}
                                value={numbers.start}
                            ></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">
                                Кінець проміжку
                            </IonLabel>
                            <IonInput
                                type="number"
                                name="end"
                                onIonInput={handleInput}
                                value={numbers.end}
                            ></IonInput>
                        </IonItem>
                        <IonButton
                            expand="block"
                            onClick={sumEvenNumbersWithRemainder2}
                        >
                            Порахувати
                        </IonButton>
                        <IonItem>
                            <p>Cума чисел що задоволняють умові: {resSum}</p>
                        </IonItem>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Tab2;
