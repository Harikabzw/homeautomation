import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DeviceService } from '../services/device.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SnackbarUiService } from '../shared/snackbar-ui.service';

import $ from 'jquery';
// import * as mqttt from "mqtt";


declare var $: $;

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})

export class DevicesComponent implements OnInit, OnDestroy {
  // registeredDevices = [ {
  //   "name":'bulb',
  //   "hardware":"HTTP"
  // },
  // {
  //   "name":'bulb',
  //   "hardware":"XBEE"
  // },
 
//];
registeredDevices=[]
  contenttype=" "
  isLoading = true;
  isAdding = false;

  constructor(private deviceService: DeviceService, private http: HttpClient, private snackbar: SnackbarUiService) {
    // var client = mqttt.connect('mqtt://192.168.43.45');
    // client.on('connect', function () {
    //   client.subscribe('fooBar', function (err) {
    //     if (!err) {
    //       client.publish('fooBar', 'Hello mqtt')
    //     }
    //   })
    // })

    // client.on('message', function (topic, message) {
    //   // message is Buffer
    //   console.log(message.toString())
    //   client.end()
    // })
  }

  
  ngOnInit() {
    this.isLoading=false
  //   this.getDevices();

   }

  ngOnDestroy() {
    
  }
controlDevice(){
  
}
  // getDevices() {
  //   // Fetch registered devices
  //   this.deviceService.getDevices().subscribe((data: any) => {
  //     this.registeredDevices = data;
  //     this.syncDevice();
  //   }, (error) => {
  //     console.log(error);
  //   });
  //   setTimeout(() => {
  //     this.isLoading = !this.isLoading;
  //   }, 1000);
  // }

 addDevice(deviceAddForm: NgForm) {
  //   this.isAdding = true;
  //   for (let i = 0; i < this.registeredDevices.length; i++) {
  //     // Check for duplicates
  //     if (this.registeredDevices[i].address === deviceAddForm.value.address) {
  //       this.snackbar.show('The device is already added!', 'alert-danger', 3500);
  //       this.isAdding = false;
  //       return;
  //     }
  //   }
  //   this.http.post(environment.apiEntryPoint + 'add', deviceAddForm.value).subscribe((res) => {
  //     const new_device: any = {};
  //     new_device.address = deviceAddForm.value.address;
  //     // Fetch device ID from POST request returned response
  //     new_device.id = res['id'];
  //     // Sync device data
  //     this.http.get(environment.apiEntryPoint + new_device.id).subscribe((data: Device) => {
  //       if (data) {
  //         new_device.name = data.name;
  //         new_device.connected = data.connected;
  //         new_device.hardware = data.hardware;
  //         // Add new device to registered devices list
  //         this.registeredDevices.push(new_device);
  //         this.isAdding = false;
  //         $('#addDeviceModal').modal('hide');
  //       }
  //     });
  //   }, error => {
  //     this.isAdding = false;
  //     console.log('Error adding a device', error);
  //     this.snackbar.show('The added device is offline!', 'alert-warning', 3500);
  //   });
   }

  // syncDevice() {
  //   // Sync device status
  //   this.registeredDevices.forEach((device) => {
  //     this.http.get(environment.apiEntryPoint + device.id).subscribe((data: Device) => {
  //       if (data) {
  //         device.name = data.name;
  //         device.connected = data.connected;
  //         device.disconnected = false;
  //         device.hardware = data.hardware;
  //       } else {
  //         device.connected = false;
  //         device.disconnected = true;
  //       }
  //     }, (error) => {
  //       console.log('Error syncing a device', error);
  //     });
  //   });
  // }

}
