#import pymongo
import ssl
import os


#print(os.getcwd())
#print(os.listdir())

# os.path.abspath("FILE_LOCATION"); FILE_LOCATION will be recieved from imported csv
#
from pymongo import MongoClient     # If this program doesnt work for you
import csv                          # likely need to pip install:
import urllib                       # ssl, bson, pymongo
from bson import ObjectId





with open(os.path.abspath("TAMU/HowdyHack2020/password_Management/mongo_export.csv"), 'r') as f1:
    csvrow = csv.reader(f1, delimiter = ",")
    for row in csvrow:
        id = row[0]
        pwd = row[1]