mindmap
  root((Tallinn Lab))
    Fortress Server <br/> 173.83.96.97
        Test Posion 173 <br/> 192.168.23.173
            Radio8847-1
                NIC <br/> 192.168.23.97
                UART-over-Ethernet <br/> 192.168.23.96
            Radio8847-2
                NIC <br/> 192.168.23.99
                UART-over-Ethernet <br/> 192.168.23.98
            Radio8747-1
                NIC <br/> 192.168.23.80
                UART-over-Ethernet <br/> 192.168.23.79
        Test Posion 179 <br/> 192.168.23.179
            Radio9847-1
                NIC <br/> 192.168.23.197
                UART-over-Ethernet <br/> 192.168.23.196

        Power Hub <br/> 192.168.23.23
            Slot 1 <br/> Connect to Radio-8847-1
            Slot 2 <br/> Connect to Radio-8847-2
            Slot 3 <br/> Connect to Radio-8747-1
            Slot 4 <br/> Connect to Radio-9747-1

        Temperature Monitor
            TP173 <br/> MQTT: TALLINN-TP173
            TP179 <br/> MQTT: TALLINN-TP179
  