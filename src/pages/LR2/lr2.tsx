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
    IonList,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];
export const data = {
    labels,
    datasets: [
        {
            label: "Dataset 2",
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
    ],
};

interface iParametrs {
    xN: number;
    xK: number;
    a: number;
    h: number;
}

interface IChartData {
    labels: number[];
    datasets: {
        label: string;
        data: number[];
        borderColor: string;
        backgroundColor: string;
    }[];
}

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top" as const,
        },
        title: {
            display: true,
            text: "Chart.js Line Chart",
        },
    },
};

const Lr2: React.FC = () => {
    const [parametrs, setParametrs] = useState<iParametrs>({
        xN: 0,
        xK: 0,
        a: 0,
        h: 0,
    });
    const [points, setPoints] = useState<string[]>([]);
    const [chartData, setChartData] = useState<IChartData>({
        labels: [],
        datasets: [
            {
                label: "Chart",
                data: [65, 59, 80, 81, 56, 55, 40],
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
        ],
    });

    const handleInput = (e: Event): void => {
        const inputEvent = e as InputCustomEvent;
        const { name, value } = inputEvent.target;
        console.log("name", name, "value", value);

        setParametrs((prev) => ({ ...prev, [name]: value }));
        console.log(parametrs);
    };

    const calculateResult = (): void => {
        let y: number = 0;
        const pointsData: string[] = [];
        let { xN, xK, a, h } = parametrs;
        xN = +xN;
        xK = +xK;
        a = +a;
        h = +h;
        console.log(xN, xK, a, h);
        const xPoints: number[] = [];
        const yPoints: number[] = [];
        while (xN < xK) {
            if (xN <= 0) {
                y = 2 * xN * Math.pow(Math.E, -xN);
            } else if (xN <= a) {
                y = Math.pow(xN - 1, 3) + Math.cos(Math.pow(xN, 3));
            } else {
                y = 2 * Math.sqrt(Math.pow(xN, 3)) * Math.sin(Math.pow(xN, 3));
            }
            xPoints.push(+xN.toFixed(1));
            yPoints.push(+y.toFixed(1));
            const pointData = `x = , ${+xN.toFixed(1)}, y = , ${+y.toFixed(1)}`
            pointsData.push(pointData);
            console.log("x = ", +xN.toFixed(1), "y = ", +y.toFixed(1));
            xN = xN + h;
        }
        setPoints(pointsData);
        setChartData((prev) => ({
            labels: xPoints,
            datasets: [
                {
                    label: "Chart",
                    data: yPoints,
                    borderColor: "rgb(53, 162, 235)",
                    backgroundColor: "rgba(53, 162, 235, 0.5)",
                },
            ],
        }));
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
                            Створити додаток для табулювання і виведення на
                            екран значення функції,
                        </p>
                        <IonItem>
                            <IonLabel position="floating">Xn</IonLabel>
                            <IonInput
                                type="number"
                                name="xN"
                                onIonInput={handleInput}
                                value={parametrs.xN}
                            ></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Xk</IonLabel>
                            <IonInput
                                type="number"
                                name="xK"
                                onIonInput={handleInput}
                                value={parametrs.xK}
                            ></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">a</IonLabel>
                            <IonInput
                                type="number"
                                name="a"
                                onIonInput={handleInput}
                                value={parametrs.a}
                            ></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">h</IonLabel>
                            <IonInput
                                type="number"
                                name="h"
                                onIonInput={handleInput}
                                value={parametrs.h}
                            ></IonInput>
                        </IonItem>
                        <IonButton expand="block" onClick={calculateResult}>
                            Порахувати
                        </IonButton>
                        <IonItem>
                            <IonList>
                            {points.map((point, index)=>(
                                <IonItem key={index}>{point}</IonItem>
                            ))}
                            </IonList>
                        </IonItem>
                        <IonItem>
                            <p>Графік</p>
                        </IonItem>
                        <IonItem>
                            <Line options={options} data={chartData} />;
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

export default Lr2;
