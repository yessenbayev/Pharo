from controller import Controller
import RPi.GPIO as GPIO
import time

solenoidGPIO = 13 

c = Controller("lockState.txt")
GPIO.setmode(GPIO.BCM)
GPIO.setup(solenoidGPIO, GPIO.OUT, initial=0)

while(True):
    c.read()

    if int(c.settings['locked'])!=0:
        GPIO.output(solenoidGPIO, GPIO.HIGH)
    else:
        GPIO.output(solenoidGPIO,GPIO.LOW)
