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
    IonModal,
    IonPage,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import { useState } from "react";


interface IGroup {
    name: string;
    course: number;
    leader: string;
    numberStudent: number;
}

const Lr8: React.FC = () => {
    const [groupsArray, setGroupsArray] = useState<IGroup[]>([]);
    const [alertOpen, setAlertOpen] = useState(false);
    const [errorText, setErrorText] = useState('')
    const [groupInput, setGroupInput] = useState<IGroup>(
        {
            name: '',
            course: 0,
            leader: '',
            numberStudent: 0,
        }
    )
    const handleInput = (e: Event): void => {
        const inputEvent = e as InputCustomEvent;
        const { name, value } = inputEvent.target;
        console.log("name", name, "value", value);

        setGroupInput((prev) => ({ ...prev, [name]: value }));
        console.log(groupInput);
    };

    const add = ()=>{
        if(!groupInput.numberStudent || !groupInput.course){
            setErrorText('Курс чи Кількість студентів не може бути нулем або від`ємною');
            setAlertOpen((prev)=> true);
            return
        }
        setGroupsArray((prev => [...prev, groupInput]))
    }

    const removeItem = (ind: number) => {
        setGroupsArray((prev)=>prev.filter((item, index)=> index != ind))
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
                    <IonModal isOpen={alertOpen}>
                    <IonHeader>
                        <IonToolbar>
                        <IonTitle>Validation Alert</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        <p>{errorText}</p>
                        <IonButton expand="full" onClick={()=>setAlertOpen((prev)=> false)}>
                        Close
                        </IonButton>
                    </IonContent>
                    </IonModal> 
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
                            <IonLabel position="floating">Назва групи</IonLabel>
                            <IonInput
                                type="text"
                                name="name"
                                required
                                onIonInput={handleInput}
                                value={groupInput.name}
                            ></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Староста</IonLabel>
                            <IonInput
                                type="text"
                                name="leader"
                                required
                                onIonInput={handleInput}
                                value={groupInput.leader}
                            ></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Курс</IonLabel>
                            <IonInput
                                type="number"
                                name="course"
                                required
                                onIonInput={handleInput}
                                value={groupInput.course}
                            ></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Кількість студентів</IonLabel>
                            <IonInput
                                type="number"
                                name="numberStudent"
                                required
                                onIonInput={handleInput}
                                value={groupInput.numberStudent}
                            ></IonInput>
                        </IonItem>
                        <IonButton expand="block" onClick={add}>
                            Порахувати
                        </IonButton>
                        <IonItem>
                            <IonList>
                            {groupsArray.map((item, index)=>(
                                <IonItem key={index}>
                                    <IonItem>{item.name}</IonItem>
                                    <IonButton onClick={()=>removeItem(index)}>Видалити</IonButton>
                                </IonItem>
                            ))}
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

export default Lr8;
