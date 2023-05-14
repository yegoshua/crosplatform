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
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import { useState } from "react";

interface iNumbers {
    number1: number;
    number2: number;
    number3: number;
}

const Tab1: React.FC = () => {
    const [numbers, setNumbers] = useState<iNumbers>({
        number1: 0,
        number2: 0,
        number3: 0,
    });
    const [grtThree, setGrtThree] = useState<number[]>();

    const handleInput = (e: Event): void => {
        const inputEvent = e as InputCustomEvent;
        const { name, value } = inputEvent.target;
        console.log("name", name, "value", value);

        setNumbers((prev) => ({ ...prev, [name]: value }));
        console.log(numbers);
    };

    const calculateResult = (): void => {
        const numArr: number[] = Object.entries(numbers).map(
            ([key, value]) => value
        );
        console.log(numArr);
        const res: number[] = [];
        numArr.forEach((number) => {
            if (number > 3) {
                res.push(number);
            }
        });
        setGrtThree((prev) => res);
        console.log("GREATER THEN 3: ", res);
    };
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
                            Задано три числа. Знайти кількість тих з них, які
                            більші 3.
                        </p>
                        <IonItem>
                            <IonLabel position="floating">Перше число</IonLabel>
                            <IonInput
                                type="number"
                                name="number1"
                                onIonInput={handleInput}
                                value={numbers.number1}
                            ></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Друге число</IonLabel>
                            <IonInput
                                type="number"
                                name="number2"
                                onIonInput={handleInput}
                                value={numbers.number2}
                            ></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Третє число</IonLabel>
                            <IonInput
                                type="number"
                                name="number3"
                                onIonInput={handleInput}
                                value={numbers.number3}
                            ></IonInput>
                        </IonItem>
                        <IonButton expand="block" onClick={calculateResult}>
                            Порахувати
                        </IonButton>
                        <IonItem>
                            <p>Числа які більші за 3: {grtThree?.join(", ")}</p>
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

export default Tab1;
