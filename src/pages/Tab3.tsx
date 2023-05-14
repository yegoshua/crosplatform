import {
    InputCustomEvent,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonMenuButton,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab3.css";
import { useState } from "react";

interface ImatrixItem {
    color: string;
    number: number;
}

const Tab3: React.FC = () => {
    const [mantrixSize, setMatrixSize] = useState<number>(0);
    const [matrix, setMatrix] = useState<ImatrixItem[][]>();
    const handleInput = (e: Event): void => {
        const inputEvent = e as InputCustomEvent;
        const { value } = inputEvent.target;
        setMatrixSize(+value!);
        console.log("value", value, "mantrixSize = ", mantrixSize);
    };

    const createMatrix = (): void => {
        const _matrix: ImatrixItem[][] = [];
        for (let i = 0; i < mantrixSize; i++) {
            const row: ImatrixItem[] = [];
            for (let j = 0; j < mantrixSize; j++) {
                const randomNumber = Math.floor(Math.random() * 100) - 40;
                let color;
                const isGreen =
                    randomNumber % 2 !== 0 && randomNumber > 0 ? true : false;
                const isPink =
                    randomNumber % 5 === 0 && randomNumber > 25 ? true : false;
                color = isGreen ? "#2E4F4F" : isPink ? "#0E8388" : "#2f2f2f";
                console.log("color: color, value: randomNumber", {
                    color: color,
                    number: randomNumber,
                });

                row.push({ color: color, number: randomNumber });
            }
            _matrix.push(row);
        }
        console.log(_matrix);
        setMatrix((prev) => _matrix);
    };
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Завдання 3</IonTitle>
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
                            Завдання 3 (Слободяник Єгор КН-32) Варінат 19
                        </IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <p>
                            Згенерувати матрицю розміром NxN. Виокремити за
                            допомогою кольору усі непарні додатні елементи, що
                            кратні 5 та біліші за 25.
                        </p>
                        <IonItem>
                            <IonLabel position="floating">
                                Розмір матриці N*N
                            </IonLabel>
                            <IonInput
                                type="number"
                                name="start"
                                onIonInput={handleInput}
                                value={mantrixSize}
                                max={20}
                            ></IonInput>
                        </IonItem>
                        <IonButton expand="block" onClick={createMatrix}>
                            Порахувати
                        </IonButton>
                        <IonItem>
                            <p>Cума чисел що задоволняють умові:</p>
                        </IonItem>
                        <IonItem>
                            {
                                <IonGrid className="matrix-grid">
                                    {matrix?.map((row, i) => (
                                        <IonRow key={i}>
                                            {row.map((item, j) => (
                                                <IonCol className="grid-item"
                                                    key={`${i}-${j}`}
                                                    style={{
                                                        backgroundColor:
                                                            item.color,
                                                        color: "#fff",
                                                    }}
                                                >
                                                    {item.number}
                                                </IonCol>
                                            ))}
                                        </IonRow>
                                    ))}
                                </IonGrid>
                            }
                        </IonItem>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Tab3;
