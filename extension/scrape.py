from urllib.request import urlopen as ureq
from bs4 import BeautifulSoup as soup 

my_url = 'https://accounts.google.com/signin'

uclient = ureq(my_url) #opening a connection, grabbing a page
page_html = uclient.read()
uclient.close()

page_soup = soup(page_html, "html.parser") #html parsing
search = page_soup.find_all('input', {'type': 'email'})
for result in search:
  # print(result, '\n')
  input_value = result.get('value')
  print('c', input_value, 'c')