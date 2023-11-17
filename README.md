# RegistrApp-2.0
Notas:
- Nuevamente todo funcionó en el dispositivo excepto el lecto qr, a pesar de que en el codigo de la app todo está bien estructurado y funcionando, seguramente por temas de versiones con android studio y capacitor hay certos del lector (Ejemplo: BarcodeScanner.startScan()) los cuales la consola arroja el error de que hay que hacer una configuración interna y más exhaustiva de esta funcionalidad, ya que android no la reconoce, y esto hace más o menos un mes y medio atras no sucedía y si dejaba abrir el escaner. 

Link APK Firmada: https://drive.google.com/drive/folders/1dWl5Vj2HsPXBnlmeycy4192INrpt2dnz 

Plugins:
@capacito/camera
@capacitor-community/barcode-scanner
@capacitor/geolocation
@ionic/storage-angular

Al momento de iniciar:

-Ejecutar comando: npm update (Esto instalará la carpeta node_modules)
-Luego: ionic serve (para que se instale .angular)
-Si es necesario ejecutar en Windows PowerShell: Set-ExecutionPoilicy Unrestricted 
