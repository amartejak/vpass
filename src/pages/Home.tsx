import { 
  IonContent, 
  IonInput, 
  IonButton, 
  IonItem, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonCard} from '@ionic/react';
import React from 'react';
import './Home.css';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

class Home extends React.Component {

  state = {
    stringEncoded: ''
  }

  render() {

    const dataToScan = async () => {
      const data = await BarcodeScanner.scan();
      alert(JSON.stringify(data));
      this.setState({ stringEncoded: data.text })
    };

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Virtual Pass</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">

          <strong>Please Scan the Qr virtual Pass</strong>

          <IonButton color="danger" expand="block" onClick={dataToScan}>
              Scan
          </IonButton>
          <br />
          <br />
          <br />
          <br />
          <strong>Scanned details are :</strong>
          <br />
          <br />
  
          <IonCard color="dark">
            <strong>{this.state.stringEncoded}</strong>
          </IonCard>
        </IonContent>
      </IonPage>
    );
  }

};

export default Home;