microIoT.microIoT_MQTT_Event(microIoT.TOPIC.topic_0, function on_microiot_mqtt_topic_0(message: string) {
    if (message == "smile") {
        basic.showIcon(IconNames.Happy)
    } else if (message == "sad") {
        basic.showIcon(IconNames.Sad)
    } else if (message == "yes") {
        basic.showIcon(IconNames.Yes)
    } else if (message == "no") {
        basic.showIcon(IconNames.No)
    } else if (message == "door open") {
        microIoT.microIoT_ServoRun(microIoT.aServos.S2, 0)
    } else if (message == "door close") {
        microIoT.microIoT_ServoRun(microIoT.aServos.S2, 90)
    } else {
        basic.showLeds(`
            . # # # .
                        . . . # .
                        . . # # .
                        . . . . .
                        . . # . .
        `)
    }
    
})
let wifi_name = "izowifi"
let password = "izo1234@"
let iot_id = "lmZB9bXGR"
let iot_pwd = "liWfrxXMgz"
let topic_0 = "qwPmNL37g"
microIoT.microIoT_initDisplay()
microIoT.microIoT_WIFI(wifi_name, password)
microIoT.microIoT_MQTT(iot_id, iot_pwd, topic_0, microIoT.SERVERS.English)
