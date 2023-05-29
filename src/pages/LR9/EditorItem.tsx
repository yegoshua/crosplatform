import {InputCustomEvent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput, IonItem, IonLabel } from '@ionic/react'
import React, { useEffect } from 'react'
import { useState } from 'react';

interface IGroup {
    name: string;
    course: number;
    leader: string;
    numberStudent: number;
}

interface IEditorItem {
    itemForEdit: IGroup,    
}

const EditorItem: React.FC<IEditorItem> = ({itemForEdit}) => {
    const [groupInput, setGroupInput] = useState<IGroup>(itemForEdit);
    useEffect(()=>{setGroupInput(itemForEdit)},[itemForEdit])
    const handleInput = (e: Event): void => {
        const inputEvent = e as InputCustomEvent;
        const { name, value } = inputEvent.target;
        console.log("name", name, "value", value);

        setGroupInput((prev) => ({ ...prev, [name]: value }));
        console.log(groupInput);
    };
    console.log(groupInput);
    
    return (
        <>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Назва групи {groupInput.name}</IonCardTitle>
                    <IonCardSubtitle>Курс {groupInput.course}</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                    <h2>Староста {groupInput.leader}</h2>
                    <h2>Кількість студентів {groupInput.numberStudent}</h2>
                </IonCardContent>
            </IonCard>
            <IonCard>
            <IonItem>
                <IonLabel position="floating">Назва групи</IonLabel>
                <IonInput
                    type="text"
                    name="name"
                    required
                    onIonInput={handleInput}
                    value={groupInput?.name || ""}
                ></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Староста</IonLabel>
                <IonInput
                    type="text"
                    name="leader"
                    required
                    onIonInput={handleInput}
                    value={groupInput?.leader || ""}
                ></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Курс</IonLabel>
                <IonInput
                    type="number"
                    name="course"
                    required
                    onIonInput={handleInput}
                    value={groupInput?.course || ""}
                ></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Кількість студентів</IonLabel>
                <IonInput
                    type="number"
                    name="numberStudent"
                    required
                    onIonInput={handleInput}
                    value={groupInput?.numberStudent || ""}
                ></IonInput>
            </IonItem>
            </IonCard>
        </>
        
    )
}

export default EditorItem