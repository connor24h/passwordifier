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

# Accesses client - PRIVATE ===================================================================================================================
client = MongoClient("mongodb+srv://connor24h:-PASSWORD-DELETED-AFTER-HOWDYHACK-@cluster0.dxcpr.mongodb.net/Passwords?retryWrites=true&w=majority", authSource = "admin")
# =============================================================================================================================================




                            # File below is csv to be sent to mongoDB
with open(os.path.abspath("TAMU/HowdyHack2020/password_Management/mongo_export.csv"), 'r') as f1:
    csvrow = csv.reader(f1, delimiter = ",")
    exportList = []
    for row in csvrow:
        Username = row[0]
        pwd = row[1]
        url = row [2]
        dict = {"Username" : Username , "Password" : pwd, "url" : url}
        exportList.append(dict)

db = client["Passwords"]    # Accesses Database
collection = db['List']     # Accesses Collection


out = collection.insert_many(exportList)
out.inserted_ids
print("Transfer Successful")
