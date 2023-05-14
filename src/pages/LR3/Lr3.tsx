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

const Tab1: React.FC = () => {
    const [data, setData] = useState<any>();
    const [authorName, setAuthorName] = useState<string>("Yegor")
    const [isLoading, setIsLoading] = useState(false);
    const [openAddInfo, setOpenAddInfo] = useState<number>(0);
    const handleInput = (e: Event): void => {
        const inputEvent = e as InputCustomEvent;
        const { name, value } = inputEvent.target;
        console.log("name", name, "value", value);
        setAuthorName(prev => String(value));
    };

    async function fetchData() {
        try {
            setIsLoading((prev) => true);
            const response = await fetch(
                "https://api.jsonbin.io/v3/b/6429d974ace6f33a220352f0"
            );
            const data = await response.json();
            console.log(data.record);
            setData(data.record);
            setIsLoading((prev) => false);
        } catch (error) {
            console.error(error);
        }
    }

    const showAdditional =  (index: number) =>{
        setOpenAddInfo(prev=> index);
    }

    const calculateResult = (): void => {
        fetchData();
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
                <IonLoading isOpen={isLoading} message={'Loading data...'} />
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
                            <IonLabel position="floating">Ім'я автора</IonLabel>
                            <IonInput
                                type="text"
                                name="author"
                                onIonInput={handleInput}
                                value={authorName}
                            ></IonInput>
                        </IonItem>
                        <IonButton expand="block" onClick={calculateResult}>
                            Завантажити
                        </IonButton>
                        <IonItem> 
                            <p>Дані</p>
                        </IonItem>
                        <IonItem>
                            <IonList>
                            {data && data.map((item, index: number)=>( 
                            <IonItem button key={index} detail>
                                {openAddInfo !== index &&<IonLabel onClick={()=>showAdditional(index)}>
                                    <p style={{color: authorName === item.author ? "red" : ""}}><span>Автор: </span><span>{item.author}</span></p>
                                </IonLabel>}
                                {openAddInfo === index && 
                                <IonText>
                                    <p style={{color: authorName === item.author ? "red" : ""}}><span>Автор: </span><span>{item.author}</span></p>
                                    <IonText>
                                        <h2 style={{}}>Назва: {item.title}</h2>
                                    </IonText>
                                    <IonText>
                                        <h2>Номер газети: {item.magazine_number}</h2>
                                    </IonText>
                                    <IonText>
                                        <h2>Назва газети: {item.magazine}</h2>
                                    </IonText>
                                    <IonText>
                                        <h2>Номер сторінки: {item.page_number}</h2>
                                    </IonText>
                                </IonText>}
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

export default Tab1;
