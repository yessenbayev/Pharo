import requests
import time
from SmartDHT22 import *
from SmartMCP3008 import *
from SmartSound import *

url = 'http://localhost:5000/flaskapp'

def add_reading(sensor,reading):

    currurl = url + "/" + sensor

    data = {'data': reading}

    resp = requests.post(currurl, data=data)

    #parsed_json = resp.json()
    return None



if __name__ == "__main__":
    lightSens = SmartMCP3008()
    tempSens = SmartDHT22(4)
    soundSens = SmartSound(5,4,6)
    while(True):
        add_reading("Temperature",tempSens.get_temp_celcius())
        add_reading("Humidity",tempSens.get_humidity())
        add_reading("Light",lightSens.read(2))
        add_reading("Audio",soundSens.get_audio())
        add_reading("Gate",int(soundSens.get_gate()))
        add_reading("Envelope",soundSens.get_envelope())
        print("Readings added to DB")
        time.sleep(60)
