import { Injectable } from '@angular/core';
import { LoadingController, AlertController, ToastController } from '@ionic/angular';
import { SpinnerTypes } from '@ionic/core';

@Injectable({
    providedIn: 'root'
})
export class UIController {

    constructor(
        public toastController: ToastController,
        public loadingController: LoadingController,
        public alertController: AlertController) {

    }


    async presentLoading(message?: string, spinner?: SpinnerTypes) {
        const loadingElement = await this.loadingController.create({
            message: message ? message : "Vui lòng đợi...",
            spinner: spinner ? spinner : "lines",
            duration: 10000
        });

        return loadingElement.present();
    }

    public closeLoading() {
        this.loadingController.dismiss();
    }

    public async presentToast(message: string, duration?: number) {
        const toast = await this.toastController.create({
            message: message,
            duration: duration ? duration : 2000
        });
        toast.present();
    }


    async presentAlertConfirm(header: string, message: string) {
        return new Promise((resolve, reject) => {
            this.alertController.create({
                header: header,
                message: message,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: reject
                    }, {
                        text: 'Ok',
                        cssClass: 'danger',
                        handler: resolve
                    }
                ]
            }).then(alert => {
                alert.present();
            });
        });
    }

}