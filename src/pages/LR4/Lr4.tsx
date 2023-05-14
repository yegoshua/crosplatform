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
    IonLoading,
    IonMenuButton,
    IonPage,
    IonSpinner,
    IonText,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import { Settlement } from "../../Classes/Settlement";
import { Village } from "../../Classes/Village";
import { City } from "../../Classes/City";

const Lr4: React.FC = () => {
    const [number, setNumber] = useState<number>(0);
    const [maxDensity, setMaxDensity] = useState<number>(0);
    const [minDensity , setMinDensity] = useState<number>(0);
    const [settlements, setSettlements] = useState<Settlement[]>();
    const handleInput = (e: Event): void => {
        const inputEvent = e as InputCustomEvent;
        const { name, value } = inputEvent.target;
        console.log("name", name, "value", value);
        setNumber(prev => Number(value));
    };

    const getRandomNuber = (max: number) =>{
        return Math.floor(Math.random() * Math.floor(max) + 1);
    }

    const solve = ()=>{
        const settlements: Settlement[] = []; 
        let max = 0;
        for (let i: number = 0; i < number; i++){
            settlements.push(new Village("Селище", getRandomNuber(100), getRandomNuber(100), getRandomNuber(1000)))
            settlements.push(new City("Місто", getRandomNuber(10000), getRandomNuber(1000)))
        }
        settlements.forEach((settlement)=>{
            settlement.S();
            if(max < settlement.density){
                max = settlement.density;
            }
            console.log(settlement.show());
        })
        findMin(settlements);
        console.log(settlements);
        setSettlements(settlements);
        setMaxDensity(max);
    }

    const findMin = (settlements: Settlement[])=>{
        let min = {value: Infinity, index: 0};
        const arrOfDensity: number[] = settlements?.map(settlement => Number(settlement.density));
        arrOfDensity.forEach((item, index)=>{
            if(min.value > item){
                min.value = item;
                min.index = index;
            }
        })
        setMinDensity(min.index);  
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
                            <IonInput
                                type="text"
                                name="author"
                                onIonInput={handleInput}
                                value={number}
                            ></IonInput>
                        </IonItem>
                        <IonButton expand="block" onClick={solve}>
                            Завантажити
                        </IonButton>
                        <IonItem> 
                            <p>Дані</p>
                        </IonItem>
                        <IonItem>
                            <IonList>
                                {settlements?.map((settlement, index) => (<IonItem key={index}>
                                    <p style={{color: index === minDensity ? "red" : ""}}>{settlement.show()}</p>
                                </IonItem>))}
                            </IonList>
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

export default Lr4;
