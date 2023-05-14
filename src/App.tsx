import { Redirect, Route } from "react-router-dom";
import {
    IonApp,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonMenu,
    IonRouterOutlet,
    IonSplitPane,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonTitle,
    IonToolbar,
    setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import MainTabs from "./components/Tabs/MainTabs";
import Lr2 from "./pages/LR2/lr2";
import Lr3 from "./pages/LR3/Lr3";
import Lr4 from "./pages/LR4/Lr4";

setupIonicReact();

const appPages = [
    { title: "Лр1 завдання 1", path: "/lr1-1" },
    { title: "Лр1 завдання 2", path: "/lr1-2" },
    { title: "Лр1 завдання 3", path: "/lr1-3" },
    { title: "Лр2 завдання 1", path: "/lr2-1" },
    { title: "Лр3 завдання 1", path: "/lr3-1" },
    { title: "Лр4 завдання 1", path: "/lr4-1" },
];

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
                <IonMenu side="start" contentId="main" menuId="first">
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>Menu</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        <IonList>
                            {appPages.map((page, index) => (
                                <IonItem
                                    key={index}
                                    routerLink={page.path}
                                    routerDirection="none"
                                >
                                    <IonIcon slot="start" />
                                    <IonLabel>{page.title}</IonLabel>
                                </IonItem>
                            ))}
                        </IonList>
                    </IonContent>
                </IonMenu>
                <IonRouterOutlet id="main">
                    <Route
                        exact
                        path="/"
                        render={() => <Redirect to="/lr1-1" />}
                    />
                    <Route exact path="/lr1-1" component={Tab1} />
                    <Route exact path="/lr1-2" component={Tab2} />
                    <Route exact path="/lr1-3" component={Tab3} />
                    <Route exact path="/lr2-1" component={Lr2} />
                    <Route exact path="/lr3-1" component={Lr3} />
                    <Route exact path="/lr4-1" component={Lr4} />
                </IonRouterOutlet>
        </IonReactRouter>
    </IonApp>
);

export default App;
