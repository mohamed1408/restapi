'use strict';

// get-WmiObject -class Win32_printer | ft name, systemName, shareName

var shell = require('node-powershell');

var ps = new shell({
  executionPolicy: 'Bypass',
  noProfile: true
});
var printers;
ps.addCommand('Get-WmiObject Win32_printer | select deviceID,portname,ip,systemName');
// ps.addCommand('get-wmiobject win32_tcpipprinterport -DESKTOP-T12S02U Myprintserver | select portname,hostaddress');
// // "get-WmiObject -class Win32_printer | ft name, systemName, port"
// ps.invoke().then(function (output) {
//     printers = output;
//   console.log(printers);
// }).catch(function (err) {
//   console.log(err);
//   ps.dispose();
// });
// ps.addCommand('$printer = gwmi -class win32_printer');
// ps.addCommand('$ip = gwmi -class win32_printer');
// ps.addCommand("$properties = @{'name' = $printer.name ; 'driver'= $printer.drivername ; 'ip' = $ip}");
// ps.addCommand('New-Object -TypeName PSCustomObject -Property $Properties');
// ps.addCommand('$printerinfo');
// "get-WmiObject -class Win32_printer | ft name, systemName, port"
// ' Get-Printer -Name "Microsoft XPS Document Writer v"'
ps.invoke().then(function (output) {
    printers = output;
  console.log(printers);
}).catch(function (err) {
  console.log(err);
  ps.dispose();
});
let printer = require('printer/lib');
    let systemPrinters = printer.getPrinters() || [];
    console.log(systemPrinters);