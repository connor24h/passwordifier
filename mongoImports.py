#import pymongo
import ssl
import os

from pymongo import MongoClient     # If this program doesnt work for you
import csv                          # likely need to pip install:
import urllib                       # ssl, bson, pymongo
from bson import ObjectId

# Accesses client =============================================================================================================================
client = MongoClient("mongodb+srv://connor24h:ray1ray1@cluster0.dxcpr.mongodb.net/Passwords?retryWrites=true&w=majority", authSource = "admin")
# =============================================================================================================================================






db = client["Passwords"]    # Accesses Database
collection = db['List']     # Accesses Collection

def findItem(Type, URL):
    x = collection.find( {str(Type) : str(URL)} ) # Edit with find( {'TYPE' : 'NAME'} ) to retrieve 
    for doc in x:
        print(doc)

findItem("url","www.Youtube.com")