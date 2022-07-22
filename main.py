def on_microiot_mqtt_topic_0(message):
    if message == "smile":
        basic.show_icon(IconNames.HAPPY)
    elif message == "sad":
        basic.show_icon(IconNames.SAD)
    elif message == "yes":
        basic.show_icon(IconNames.YES)
    elif message == "no":
        basic.show_icon(IconNames.NO)
    else:
        basic.show_leds("""
            . # # # .
                        . . . # .
                        . . # # .
                        . . . . .
                        . . # . .
        """)
microIoT.microIoT_MQTT_Event(microIoT.TOPIC.TOPIC_0, on_microiot_mqtt_topic_0)

wifi_name = "izowifi"
password = "izo1234@"
iot_id = "lmZB9bXGR"
iot_pwd = "liWfrxXMgz"
topic_0 = "qwPmNL37g"
microIoT.microIoT_initDisplay()
microIoT.microIoT_WIFI(wifi_name, password)
microIoT.microIoT_MQTT(iot_id, iot_pwd, topic_0, microIoT.SERVERS.ENGLISH)